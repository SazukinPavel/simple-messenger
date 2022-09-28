<template>
  <div class="center">
    <message-list :messages="messages" />
    <SendMessage @newMessage="sendMessage" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";
import { io } from "socket.io-client";
import SendMessage from "@/components/Messages/SendMessage.vue";
import MessageList from "@/components/Messages/MessageList.vue";

const messages = ref([]);

const ws = io("http://localhost:3000/");

function sendMessage(message: string) {
  ws.emit("message", message);
}
</script>

<style scoped></style>
