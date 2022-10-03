import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from 'src/schemas/Message.shema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema}])],
  providers: [MessagesService, MessagesGateway],
})
export class MessagesModule {}
