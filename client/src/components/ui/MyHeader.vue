<template>
  <div class="header">
    <span>Simple Messenger</span>
    <nav>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  background-color: #2474c7;

  span {
    font-size: 2rem;
    color: white;
  }

  nav {
    margin-right: 3rem;

    a {
      color: white;
      margin: 0 0.5rem;
      font-size: 1.5rem;
      transition: all 1s;

      &:hover {
        color: lightgray;
      }
    }
  }
}
</style>
