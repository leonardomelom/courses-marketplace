import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

export interface MessageProps {
  message: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): MessageProps {
    return this.appService.getHello();
  }
}
