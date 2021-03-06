import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

async function bootstrap() {
  try {
    await createConnection(); // sets up typeorm from ormconfig.json
    const app = await NestFactory.create(AppModule);
    await app.listen(3100);
  } catch (e) {
    console.log(e);
  }
}
bootstrap();
