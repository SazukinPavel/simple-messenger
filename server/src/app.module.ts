import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { MessagesGateway } from './messages/messages.gateway';

@Module({
  imports: [MessagesModule],
})
export class AppModule {}
