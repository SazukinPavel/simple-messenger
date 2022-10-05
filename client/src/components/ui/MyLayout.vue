<template>
  <my-header />
  <slot></slot>
</template>

<script>
import MyHeader from "@/components/ui/MyHeader";

export default {
  name: "MyLayout",
  components: { MyHeader },
};
</script>

<style lang="scss" scoped></style>
