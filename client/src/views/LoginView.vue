<template>
  <div class="login center">
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <label>
        Username:
        <input type="text" v-model="loginDto.username" />
      </label>
      <label>
        Password:
        <input type="text" v-model="loginDto.username" />
      </label>
      <div class="buttons">
        <my-button @click="onReset" type="button">Reset</my-button>
        <my-button type="submit">Login</my-button>
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
  margin-top: 5rem;
  border: 0.2rem solid #2474c7;
  border-radius: 0.5rem;
  width: 600px;
  padding: 4rem;
  h1 {
    text-align: center;
    font-size: 2rem;
  }

  form {
    margin: 2rem auto auto;
    label {
      font-size: 1.2rem;
      input {
        margin-top: 0.3rem;
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
    }
    .buttons {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
