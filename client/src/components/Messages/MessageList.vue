<template>
  <div class="messages">
    <message-card
      v-for="message in props.messages"
      :key="message.text"
      :message="message"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import MessageCard from "@/components/Messages/MessageCard.vue";

const props = defineProps(["messages"]);
</script>

<style scoped></style>
