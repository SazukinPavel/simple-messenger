<template>
  <div class="system-message-card">
    <span>{{ props.message.text }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps(["message"]);
</script>

<style lang="scss" scoped>
.system-message-card {
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;

  span {
    font-size: 1.5rem;
  }
}
</style>
