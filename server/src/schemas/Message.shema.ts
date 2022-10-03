import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  _id: string;

  @Prop()
  username: string;

  @Prop({required:true})
  text: string;

  @Prop({default:false})
  isSystem:boolean
}

export const MessageSchema = SchemaFactory.createForClass(Message);
