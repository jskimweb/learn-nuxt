import axios from 'axios'

const link = {
	products: 'http://localhost:3000/products/',
	carts: 'http://localhost:3000/carts/',
};

function fetchProductById(id) {
	return axios.get(`${link.products}${id}`)
}

function fetchProductByKeyword(keyword) {
	return axios.get(`${link.products}`, {
		params: {
			name_like: keyword
		}
	})
}

function fetchCartItems() {
	return axios.get(`${link.carts}`)
}

function createCartItem(cartItem) {
	return axios.post(`${link.carts}`, cartItem)
}

export {
  fetchProductById,
  fetchProductByKeyword,
	fetchCartItems,
	createCartItem,
}