import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAbout(): string {
    return 'Deekshith Maram-Software Developer.';
  }
  getHello(): string {
    return 'Hello World! This is Deekshith Maram.';
  }
 
}
