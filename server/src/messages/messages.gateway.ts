import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import MessageEventTypes from '../../types/MessageEventTypes';
import Message from '../../types/Message';
import { v4 } from 'uuid';

@WebSocketGateway({ cors: true })
export class MessagesGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data) {
    const event = MessageEventTypes.NewMessage;
    const message: Message = {
      text: data.text._value,
      owner: data.owner._value,
      id: v4(),
    };
    this.server.emit(event, message);
  }

  handleConnection(client: Socket) {
    const username = client.handshake.query.username;
    const message: Message = {
      text: `User ${username} join chat`,
      isSystem: true,
      id: v4(),
    };
    this.server.emit(MessageEventTypes.UserJoin, message);
  }

  handleDisconnect(client: Socket): any {
    const username = client.handshake.query.username;
    const message: Message = {
      text: `User ${username} leave chat`,
      isSystem: true,
      id: v4(),
    };
    this.server.emit(MessageEventTypes.UserLeave, message);
  }
}
