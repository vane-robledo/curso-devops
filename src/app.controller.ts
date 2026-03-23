import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/saludo') //localhost:3000
  getHello(): string {
    return this.appService.getHello();
  }
}
