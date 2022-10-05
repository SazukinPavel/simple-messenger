import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MessagesModule,
    MongooseModule.forRoot(
      'mongodb+srv://pavel:Sazukin9524@myclaster.8ywgu.mongodb.net/simple-chat-app',
    ),
  ],
})
export class AppModule {}
