<template>
  <div class="send-message">
    <input type="text" v-model="newMessage" />
    <my-button @click="send">Send</my-button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from "vue";
const emit = defineEmits(["newMessage"]);

const newMessage = ref("");

function send() {
  if (newMessage.value) {
    emit("newMessage", newMessage);
  }
}
</script>

<style scoped lang="scss">
.send-message {
  display: flex;
  justify-content: space-between;
  input {
    width: 85%;
    font-size: 1.5rem;
  }
}
</style>
