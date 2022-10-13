<template>
  <p class="text-h3 font-weight-bold">Messages</p>
  <v-card variant="outlined" class="messages" height="70vh">
    <template v-for="message in props.messages">
      <message-card
        v-if="!message.isSystem"
        :key="message.id"
        :message="message"
      />
      <system-message-card v-else :key="message._id" :message="message" />
    </template>
  </v-card>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import MessageCard from "@/components/Messages/MessageCard.vue";
import SystemMessageCard from "@/components/Messages/SystemMessageCard.vue";

const props = defineProps(["messages"]);
</script>

<style scoped>
.messages {
  overflow-y: scroll;
  scrollbar-color: rebeccapurple gray;
}
</style>
