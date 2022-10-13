<template>
  <v-card class="mt-5 mx-10 rounded-xl" dark>
    <v-card-text class="text-center text-h6">{{
      props.message.text
    }}</v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps(["message"]);
</script>

<style lang="scss" scoped></style>
