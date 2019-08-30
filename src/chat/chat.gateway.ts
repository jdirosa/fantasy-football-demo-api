import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

@WebSocketGateway(4000)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server;
  users: { username?: string; id: string }[] = [];
  async handleConnection(client) {
    // A client has connected
    this.users.push({ id: client.id });
    console.log(this.users);
  }
  @SubscribeMessage('user-join')
  async handleJoin(client, username) {
    if (this.users.findIndex(u => u.id === client.id && !u.username) >= 0) {
      const index = this.users.findIndex(u => u.id === client.id);
      this.users[index].username = username;
      this.server.emit('user-join', username + ' Joined the chat!');
      console.log(this.users);
    } else {
      console.log('existing user ignored');
    }
  }
  async handleDisconnect(client) {
    // A client has disconnected
    const index = this.users.findIndex(u => u.id === client.id);
    if (index >= 0) {
      const user = this.users.splice(index, 1);
      // Notify connected clients of current users
      this.server.emit('user-leave', user);
      console.log(this.users);
    }
  }

  @SubscribeMessage('chat')
  async onChat(client, message) {
    console.log('chat: ' + message);
    client.broadcast.emit('chat', {
      user: this.users.find(f => client.id === f.id).username,
      message,
    });
  }
}
