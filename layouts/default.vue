<template>
  <div>
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader'

  export default {
    name: 'DefaultPage',
    components: {
      AppHeader
    }
  }
</script>

<style>
  html {
    font-size: 16px;
  }
</style>