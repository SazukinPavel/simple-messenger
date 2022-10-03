import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from 'src/schemas/Message.shema';
import { CreateMessageDto } from './dto';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(Message.name) private readonly messageModel: Model<MessageDocument>) {}

    async addNewMessage({owner,text}:CreateMessageDto){
        const message=await this.messageModel.create({text,username:owner.username})
        await message.save()
        return message
    }

    private async findByIdOrThrowExeption(id:string){
        const message=await this.messageModel.findById(id)
        if(!message){
            throw new ForbiddenException('This message not exists')
        }
        return message
    }

    deleteMessageById(id:string){
        await this.findByIdOrThrowExeption(id)
        return this.messageModel.findByIdAndDelete(id)
    }

    getAll(){
        return this.messageModel.find()
    }
}
