import { Injectable, Inject } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Message } from '../database/entity/Message';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
