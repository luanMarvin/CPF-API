import { Module } from '@nestjs/common';
import { CPFController } from './controllers/cpf.controller';
import { View } from './controllers/view.controller';

// A estrutura do NEST requer as informações abaixo. Qaulquer dúvida acesse a documentação do Nest.js: https://docs.nestjs.com/
@Module({
  imports: [],
  controllers: [CPFController, View],
  providers: [],
})
export class AppModule {}
