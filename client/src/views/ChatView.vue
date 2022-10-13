<template>
  <v-container class="center">
    <message-list :messages="messages" />
    <SendMessage @newMessage="sendMessage" />
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import SendMessage from "@/components/Messages/SendMessage.vue";
import MessageList from "@/components/Messages/MessageList.vue";
import { useChatSocket, useRedirectTo } from "@/hooks";
import { useStore } from "vuex";

const store = useStore();

const messages = computed(() => store.getters["message/getMessages"]);
const isAuth = computed(() => store.getters["auth/isAuth"]);

useRedirectTo(!isAuth.value);

const { sendMessage } = useChatSocket();
</script>

<style scoped></style>
