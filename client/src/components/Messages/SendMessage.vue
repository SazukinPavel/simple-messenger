<template>
  <input type="text" v-model="newMessage" />
  <button @click="send">Send</button>
</template>

<script setup lang="ts">
import { defineEmits, ref } from "vue";
const emit = defineEmits(["newMessage"]);

const newMessage = ref("");

function send() {
  emit("newMessage", newMessage);
}
</script>

<style scoped></style>
