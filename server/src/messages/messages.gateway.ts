import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import MessageEventTypes from '../../types/MessageEventTypes';
import Message from '../../types/Message';

@WebSocketGateway({ cors: true })
export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: Message): WsResponse<Message> {
    const event = MessageEventTypes.NewMessage;
    return { event, data };
  }

  handleConnection(socket: Socket) {
    const username = socket.handshake.query.username;
    const message: Message = { text: `User ${username} join chat` };
    this.server.emit(MessageEventTypes.UserJoin, message);
  }

  OnGatewayDisconnect(socket: Socket) {
    console.log(socket.handshake.query);
  }
}
