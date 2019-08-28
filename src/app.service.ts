import { Injectable, Inject } from '@nestjs/common';
import { createConnection, getConnection } from 'typeorm';
import { Message } from './entity/Message';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async saveMessage(text: string, author: string) {
    console.log("Inserting a new user into the database...");
    const message = new Message();
    message.author = author;
    message.message = text;
    message.createdDate = new Date();
    const connection = getConnection();
    let repo = connection.getRepository(Message);
    await repo.save(message);
    console.log("Saved a new message with id: " + message.id);

    console.log("Loading messages from the database...");
    const messages = await repo.find();
    console.log("Loaded messages: ", messages);
  }
}