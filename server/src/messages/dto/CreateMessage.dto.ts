import { User } from 'src/types';

export default class CreateMessageDto {
  text: string;
  owner: User;
}
