import { User } from './User';

export default interface Message {
  text: string;
  owner?: User;
}
