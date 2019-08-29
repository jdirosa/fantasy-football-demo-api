import { Controller, Get, Put } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from 'src/database/entity/Message';
import { go, toResponse } from 'src/utils';
import { ApiResponse } from 'src/types/http';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async getMessages(): Promise<ApiResponse<Message[]>> {
    const [err, messages] = await go(this.messageService.getMessages());
    const response = toResponse(messages, err);
    return response;
  }
  @Put()
  async saveMessage(
    author: string,
    messageBody: string,
  ): Promise<ApiResponse<Message>> {
    const [err, message] = await go(
      this.messageService.saveMessage(messageBody, author),
    );
    const response = toResponse(message, err);
    return response;
  }
}
