<template>
  <div>
    <span class="owner">{{ props.message.text }}</span>
    <span class="message">{{ props.message.owner.username }}</span>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, defineProps } from "vue";

const props = defineProps(["message"]);
</script>

<style scoped></style>
