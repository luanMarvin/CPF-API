import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const port: number = parseInt(process.env.PORT) || 3000;
  await app.listen(port).then(() => {
    console.log('Server is running at: ', port);
  });
}

bootstrap();
