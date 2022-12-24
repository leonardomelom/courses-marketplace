import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [DatabaseModule, HttpModule],

  //controla as rotas do servico
  controllers: [],

  //arquivos com funcionalidades
  providers: [],
})
export class AppModule {}
