import { computed, ref } from "vue";
import { io } from "socket.io-client";
import User from "@/types/User";
import { useStore } from "vuex";
import { Message } from "@/types/Message";

export default function () {
  const store = useStore();

  const user = ref(store.getters["auth/getUser"]);

  const ws = ref(
    io("http://localhost:3000/", { query: { username: user.value.username } })
  );

  ws.value.on("message", (data) => {
    const message: Message = {
      text: data.text._value,
      owner: data.owner._value,
    };
    console.log(data);
    console.log(message);
    store.dispatch("message/addMessage", message);
  });

  ws.value.on("connect", () => {
    console.log(ws.value.id);
  });

  ws.value.on("disconnect", () => {
    console.log(ws.value.id);
  });

  function sendMessage(text: string) {
    const message: Message = { text, owner: user };
    ws.value.emit("message", message);
  }

  return {
    sendMessage,
  };
}
