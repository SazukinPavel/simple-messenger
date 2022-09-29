import { ref } from "vue";
import { io } from "socket.io-client";

export default function () {
  const ws = ref(io("http://localhost:3000/", { query: { name: "some" } }));

  ws.value.on("message", (s: string) => {
    console.log(s);
  });

  ws.value.on("connect", () => {
    console.log(ws.value.id);
  });

  ws.value.on("disconnect", () => {
    console.log(ws.value.id);
  });

  function sendMessage(message: string) {
    ws.value.emit("message", message);
  }

  return {
    sendMessage,
  };
}
