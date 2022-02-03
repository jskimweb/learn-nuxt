<template>
  <div>
    <header>
      <h1>
				<nuxt-link to="/">Nuxt Shop</nuxt-link>
			</h1>
    </header>
    <Nuxt />
  </div>
</template>

<script>
  export default {
		name: 'DefaultPage'
  }
</script>

<style>
  h1 {
    text-align: center;
  }
</style>