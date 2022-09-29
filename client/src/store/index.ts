import { createStore } from "vuex";
import { AuthModule } from "@/store/modules/auth";
import { MessageModule } from "@/store/modules/message";

export default createStore({
  modules: { auth: AuthModule, message: MessageModule },
});
