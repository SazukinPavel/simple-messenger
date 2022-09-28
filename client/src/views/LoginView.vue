<template>
  <div class="login">
    <form @submit.prevent="onSubmit">
      <label>
        Username:
        <input type="text" v-model="loginDto.username" />
      </label>
      <div class="buttons">
        <my-button @click="onReset" type="button">reset</my-button>
        <my-button type="submit">login</my-button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginDto from "@/types/dto/Login.dto";

const loginDto = ref<LoginDto>({ username: "" });

function onSubmit() {
  console.log(loginDto);
  onReset();
}

function onReset() {
  loginDto.value = { username: "" };
}
</script>

<style scoped lang="scss">
.login {
  form {
    .buttons {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
