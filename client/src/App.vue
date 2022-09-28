<template>
  <my-layout>
    <router-view />
  </my-layout>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
}

.center {
  width: 50%;
  margin: auto;
}

a {
  text-decoration: none;
}
</style>
<script>
import MyLayout from "@/components/ui/MyLayout";
export default {
  components: { MyLayout },
};
</script>
