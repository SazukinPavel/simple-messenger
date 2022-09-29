<template>
  <div class="center">
    <message-list :messages="messages" />
    <SendMessage @newMessage="sendMessage" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SendMessage from "@/components/Messages/SendMessage.vue";
import MessageList from "@/components/Messages/MessageList.vue";
import { useChatSocket } from "@/hooks";

const messages = ref([]);

const { sendMessage } = useChatSocket();
</script>

<style scoped></style>
