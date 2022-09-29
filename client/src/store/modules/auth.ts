import { Module } from "vuex";
import User from "@/types/User";
import AuthState from "@/store/states/AuthState";

const initialState: AuthState = { isAuth: false };

export const AuthModule: Module<AuthState, any> = {
  namespaced: true,
  state: initialState,
  actions: {},
  getters: {},
  mutations: {},
};
