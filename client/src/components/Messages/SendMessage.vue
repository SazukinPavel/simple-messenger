<template>
  <v-row class="mt-5 mx-10">
    <v-text-field
      clearable
      label="new message"
      variant="outlined"
      v-model="newMessage"
    ></v-text-field>
    <v-btn @click="send">Send</v-btn>
  </v-row>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["newMessage"]);

const newMessage = ref("");

function send() {
  if (newMessage.value) {
    emit("newMessage", newMessage);
    newMessage.value = "";
  }
}
</script>

<style lang="scss" scoped></style>
