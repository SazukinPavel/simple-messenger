<template>
  <div class="send-message">
    <input v-model="newMessage" type="text" />
    <my-button @click="send">Send</my-button>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["newMessage"]);

const newMessage = ref("");

function send() {
  if (newMessage.value) {
    emit("newMessage", newMessage);
  }
}
</script>

<style lang="scss" scoped>
.send-message {
  display: flex;
  justify-content: space-between;

  input {
    width: 85%;
    font-size: 1.5rem;
  }
}
</style>
