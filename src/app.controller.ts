import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(): Promise<string> {
    await this.appService.saveMessage('My First Message', 'James DiRosa');
    return this.appService.getHello();
  }
}
