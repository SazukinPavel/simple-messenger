import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Message, MessageEventTypes } from 'src/types';
import { CreateMessageDto, CreateSystemMessageDto } from './dto';
import { MessagesService } from './messages.service';

@WebSocketGateway({ cors: true })
export class MessagesGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{

  constructor(private readonly messagesService:MessagesService){}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() data) {
    const event = MessageEventTypes.NewMessage;
    const message: CreateMessageDto = {
      text: data.text._value,
      owner: data.owner._value,
    };

    await this.messagesService.addMessage(message)

    this.server.emit(event, message);
  }

  async handleConnection(client: Socket){
    const username = client.handshake.query.username;

    const messages=this.messagesService.getAll()
    this.server.emit(MessageEventTypes.GetOldMessages,messages)
    
    const message: CreateSystemMessageDto = {
      text: `User ${username} join chat`,
      isSystem: true,
    };

    await this.messagesService.addSystemMessaage(message)

    this.server.emit(MessageEventTypes.UserJoin, message);
  }

  async handleDisconnect(client: Socket){
    const username = client.handshake.query.username;
    
    const message: CreateSystemMessageDto = {
      text: `User ${username} leave chat`,
    };

    await this.messagesService.addSystemMessaage(message)

    this.server.emit(MessageEventTypes.UserLeave, message);
  }
}
