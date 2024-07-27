import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessagesService } from './messages.service';
//class decorator
@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  //method decorator
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  //@Body is argument decorator, body: any is ts annotation
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content)
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id)
  }
}
