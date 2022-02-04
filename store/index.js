import { fetchCartItems } from '@/api/index';

const state = () => ({
  cartItems: [],
});

const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    };
    state.cartItems.push(newCartItem)
  },
	setCartItems(state, cartItems) {
		state.cartItems = cartItems
	}
};

const actions = {
	async FETCH_CART_ITEMS({ commit }) {
		const { data } = await fetchCartItems();
		commit('setCartItems', data);
	},
};

export {
  state,
  mutations,
  actions
}