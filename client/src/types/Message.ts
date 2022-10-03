import User from "@/types/User";

export interface Message {
  text: string;
  owner: User;
  isSystem?: boolean;
  _id?: string;
}
