<template>
  <v-container fluid fill-height align-center justify-center md4 class="login">
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login form</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form @submit.prevent>
          <v-text-field
            label="Username"
            v-model="loginDto.username"
          ></v-text-field>
          <v-text-field label="Password"></v-text-field>
          <div class="buttons"></div>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="button" variant="outlined" @click="onReset">Reset</v-btn>
        <v-btn variant="outlined" @click="onSubmit">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
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
  width: 600px;
}
</style>
