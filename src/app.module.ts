import { Module } from '@nestjs/common';
import { CPFController } from './controllers/cpf.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [],
  controllers: [CPFController],
  providers: [],
})
export class AppModule {}
