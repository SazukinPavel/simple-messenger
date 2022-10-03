<template>
  <div class="messages">
    <template v-for="message in props.messages">
      <message-card
        v-if="!message.isSystem"
        :key="message.id"
        :message="message"
      />
      <system-message-card v-else :key="message._id" :message="message" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import MessageCard from "@/components/Messages/MessageCard.vue";
import SystemMessageCard from "@/components/Messages/SystemMessageCard.vue";

const props = defineProps(["messages"]);
</script>

<style scoped>
.messages {
  min-height: 70vh;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border: 0.2rem solid #2474c7;
}
</style>
