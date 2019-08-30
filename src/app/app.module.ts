import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from 'src/messages/message.module';
import { ChatModule } from 'src/chat/chat.module';

@Module({
  imports: [MessageModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
