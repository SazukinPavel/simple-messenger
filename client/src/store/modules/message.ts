import { Module } from "vuex";
import MessageState from "@/store/states/MessageState";
import { Message } from "@/types/Message";

const initialState: MessageState = { messages: [] };

export const MessageModule: Module<MessageState, any> = {
  namespaced: true,
  state: initialState,
  actions: {},
  getters: {
    getMessages(state) {
      return state.messages;
    },
  },
  mutations: {
    addMessage(state, message: Message) {
      state.messages.push(message);
    },
    setMessages(state, messages: Message[]) {
      state.messages = messages;
    },
  },
};
