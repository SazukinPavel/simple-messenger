import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "@/components/ui/index";

const app = createApp(App);

app.use(store);
app.use(router);

components.map((c) => {
  app.component(c.name, c);
});

app.mount("#app");
