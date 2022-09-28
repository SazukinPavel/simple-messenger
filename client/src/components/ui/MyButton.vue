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
  padding: 0.5rem 1rem;
  background: #2474c7;
  color: white;
  border: #2474c7 0.1rem solid;
  border-radius: 0.5rem;
  transition: all 0.5s;
  box-shadow: 0.05rem 0.1rem 0.2rem #1461a7;
  &:hover,
  :focus {
    border: #3e84c8 0.1rem solid;
    box-shadow: 0.1rem 0.2rem 0.3rem #1f70be;
  }
}
</style>
