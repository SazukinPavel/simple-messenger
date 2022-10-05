import User from "@/types/User";

export interface Message {
  text: string;
  username: string;
  isSystem?: boolean;
  _id?: string;
}
