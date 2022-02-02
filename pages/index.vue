<template>
  <div class="app">
    <header>
      <h1>Nuxt Shop</h1>
    </header>
    <main>
      <div>
        <input type="text">
      </div>
      <ul>
        <li v-for="product in products" :key="product.id" class="item flex" @click="moveToDetailPage(product.id)" >
          <img :src="product.imageUrl" :alt="product.name" class="product-image">
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'IndexPage',
    async asyncData() {
      const response = await axios.get('http://localhost:3000/products');
      const products = response.data.map(item => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      }));
      return {
        products
      }
    },
    methods: {
      moveToDetailPage(id) {
        console.log(id);
      }
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .flex {
    display: flex;
    justify-content: center;
  }

  .app {
    position: relative;
  }

  .item {
    display: inline-block;
    width: 400px;
    height: 300px;
    text-align: center;
    margin: 0 0.5rem;
    cursor: pointer;
  }

  .product-image {
    width: 400px;
    height: 250px;
  }

  .cart-wrapper {
    position: sticky;
    float: right;
    bottom: 50px;
    right: 50px;
  }

  .cart-wrapper .btn {
    display: inline-block;
    height: 40px;
    font-size: 1rem;
    font-weight: 500;
  }
</style>