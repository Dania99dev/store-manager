import { createStore } from "vuex";

export default createStore({
  state: {
    products: [] as Array<object>
  },
  mutations: {
    setProducts: (state, products) => (state.products = products),
    addNewProduct: (state, newProduct) => (state.products.push(newProduct))
  },
  actions: {
    async fetchProducts({ commit }) {
      const res = await fetch("api/products");
      const data = await res.json();
      commit("setProducts", data);
    },
    async addNewProduct({commit}, newProduct) {
      const res = await fetch("api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
      });

      const data = await res.json();
      commit("addNewProduct", data);
    }
  },
  modules: {}
});
