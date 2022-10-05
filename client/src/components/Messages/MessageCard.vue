<template>
  <div class="message-card">
    <span class="message">{{ props.message.text }}</span>
    <span class="owner">{{ props.message.username }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps(["message"]);
</script>

<style lang="scss" scoped>
.message-card {
  border: 0.1rem solid #2474c7;
  border-radius: 0.5rem;
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  margin: 0.5rem;

  span.owner {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }

  span.message {
    margin-left: 2rem;
    font-size: 1.5rem;
  }
}
</style>
