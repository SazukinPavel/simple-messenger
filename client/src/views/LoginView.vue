<template>
  <div class="login center">
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <label>
        Username:
        <input v-model="loginDto.username" type="text" />
      </label>
      <label>
        Password:
        <input v-model="loginDto.username" type="text" />
      </label>
      <div class="buttons">
        <my-button type="button" @click="onReset">Reset</my-button>
        <my-button type="submit">Login</my-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LoginDto from "@/types/dto/Login.dto";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const loginDto = ref<LoginDto>({ username: "" });
const router = useRouter();
const store = useStore();

function onSubmit() {
  store.dispatch("auth/login", loginDto.value);
  router.push("/messages");
  onReset();
}

function onReset() {
  loginDto.value = { username: "" };
}
</script>

<style lang="scss" scoped>
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
