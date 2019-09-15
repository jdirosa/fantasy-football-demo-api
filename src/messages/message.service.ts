import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Message } from '../database/entity/Message';

@Injectable()
export class MessageService {
  async saveMessage(text: string, author: string): Promise<Message> {
    console.log('Inserting a new user into the database...');
    const message = new Message();

    message.author = author;
    message.message = text;
    message.createdDate = new Date();

    const connection = getConnection(); // TODO: connection should be injected as it is now basically a dependency
    const repo = connection.getRepository(Message);
    return await repo.save(message);
  }
  async getMessages(): Promise<Message[]> {
    const connection = getConnection();
    return await connection.getRepository(Message).find();
  }
}
