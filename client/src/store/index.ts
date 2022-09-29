import { createStore } from "vuex";
import { AuthModule } from "@/store/modules/auth";

export default createStore({
  modules: { AuthModule },
});
