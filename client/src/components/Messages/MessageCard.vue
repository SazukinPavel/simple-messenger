<template>
  <v-card class="mt-5 mx-10 rounded-xl" dark variant="outlined">
    <v-card-text class="text-h5 font-weight-bold">
      {{ message.text }}
    </v-card-text>
    <v-card-title class="text-right">{{ message.username }}</v-card-title>
  </v-card>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps(["message"]);
</script>

<style lang="scss" scoped></style>
