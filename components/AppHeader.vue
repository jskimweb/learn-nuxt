<template>
  <header class="title">
    <nuxt-link class="logo" to="/">Nuxt Shop</nuxt-link>
  </header>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  header {
    height: 60px;
    display: flex;
    justify-content: center;
		align-items: center;
    padding: 0 0.5rem;
  }

  .logo {
    font-weight: 900;
  }

  .logo:visited {
    color: inherit;
  }
</style>