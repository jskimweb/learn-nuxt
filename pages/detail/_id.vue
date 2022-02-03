<template>
	<div class="container">
		<div class="main-panel">
			<img :src="product.imageUrl" :alt="product.name">
		</div>
		<div class="side-panel">
			<p>name: {{ product.name }}</p>
			<p>price: {{ product.price }}</p>
			<!-- <button type="button" @click="addToCart">Add to Cart</button> -->
		</div>
	</div>
</template>

<script>
	import { fetchProductById } from '@/api/api'

  export default {
		async asyncData({ params }) {
			const response = await fetchProductById(params.id);
			const product = response.data;
			return { product }
		}
  }
</script>

<style scoped>
	.container {
		display: flex;
		justify-content: center;
		margin: 2rem 0;
	}

	.product-image {
		width: 500px;
		height: 375px;
	}

	.side-panel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		widows: 220px;
		text-align: center;
		padding: 0 1rem;
	}
</style>