import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): WsResponse<string> {
    console.log(data);
    const event = 'message';
    return { event, data };
  }

  handleConnection(socket: Socket) {
    console.log(socket.handshake.query);
  }
}
