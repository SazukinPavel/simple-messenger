import { ref } from "vue";
import { io } from "socket.io-client";
import { useStore } from "vuex";
import { Message } from "@/types/Message";
import MessageEventTypes from "@/types/MessageEventTypes";

export default function () {
  const store = useStore();

  const user = ref(store.getters["auth/getUser"]);

  const ws = ref(
    io("http://localhost:3000/", { query: { username: user.value?.username } })
  );

  ws.value.on(MessageEventTypes.NewMessage, (data) => {
    const message = data as Message;
    store.commit("message/addMessage", message);
  });

  ws.value.on(MessageEventTypes.UserJoin, (data) => {
    const message = data as Message;
    store.commit("message/addMessage", message);
  });

  ws.value.on(MessageEventTypes.UserLeave, (data) => {
    const message = data as Message;
    store.commit("message/addMessage", message);
  });

  ws.value.on(MessageEventTypes.GetOldMessages, (data) => {
    const messages = data as Message[];
    store.commit("message/setMessages", messages);
  });

  ws.value.on("connect", () => {
    console.log(ws.value.id);
  });

  ws.value.on("disconnect", () => {
    console.log(ws.value.id);
  });

  const sendMessage = (text: string) => {
    const message: any = { text, owner: user };
    ws.value.emit("message", message);
  };

  return {
    sendMessage,
  };
}
