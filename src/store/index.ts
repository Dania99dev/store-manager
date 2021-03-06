import { createStore } from "vuex";

export default createStore({
  state: {
    products: []
  },
  mutations: {
    setProducts: (state, products) => state.products = products
  },
  actions: {
    async fetchProducts({ commit }) {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      commit('setProducts', data);
    }
  },
  modules: {}
});
