import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

NestFactory.create(AppModule)
  .catch(error => console.error(error));
