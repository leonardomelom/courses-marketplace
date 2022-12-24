import { Injectable } from '@nestjs/common';
import { MessageProps } from './app.controller';

@Injectable()
export class AppService {
  getHello(): MessageProps {
    return {
      message: 'Hello World! world war 2',
    };
  }
}
