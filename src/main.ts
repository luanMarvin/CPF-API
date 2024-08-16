import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';

// Esse código contém comentários e pode ser utilizado para estudo.
// A função desse projeto é checar um CPF dizendo se ele é válido ou não.
// Esse é um projeto com foco de estudo, e sua distribuição é livre.

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const port: number = parseInt(process.env.PORT) || 3000;
  await app.listen(port).then(() => {
    console.log('Server is running at: ', port);
  });
}

bootstrap();
