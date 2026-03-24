import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/saludo') //localhost:3000
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hi')
  getHi(): string {
    return this.appService.getHi()
  }

}
