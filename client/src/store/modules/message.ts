import { Module } from "vuex";
import MessageState from "@/store/states/MessageState";
import { Message } from "@/types/Message";

const initialState: MessageState = { messages: [] };

export const MessageModule: Module<MessageState, any> = {
  namespaced: true,
  state: initialState,
  actions: {
    addMessage({ commit }, message: Message) {
      commit("addMessage", message);
    },
  },
  getters: {
    getMessages(state) {
      return state.messages;
    },
  },
  mutations: {
    addMessage(state, message: Message) {
      state.messages.push(message);
    },
  },
};
