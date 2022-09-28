<template>
  <button class="my-button"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped lang="scss">
.my-button {
  margin: 0 0.5rem;
  padding: 0.5rem;
  background: #2474c7;
  color: white;
}
</style>
