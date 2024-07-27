import { Controller, Get, Post, Body, Param } from '@nestjs/common';

//class decorator
@Controller('messages')
export class MessagesController {
  //method decorator
  @Get()
  listMessages() {}

  @Post()
  //@Body is argument decorator, body: any is ts annotation
  createMessage(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
