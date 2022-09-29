import { Module } from "vuex";
import User from "@/types/User";
import AuthState from "@/store/states/AuthState";
import LoginDto from "@/types/dto/Login.dto";

const initialState: AuthState = { isAuth: false };

export const AuthModule: Module<AuthState, any> = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, dto: LoginDto) {
      console.log(dto);
      commit("setUser", { ...dto });
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, user: User) {
      state.isAuth = true;
      state.user = user;
    },
  },
};
