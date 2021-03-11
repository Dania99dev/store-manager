import { createStore } from "vuex";
import { Product } from "../types";

export default createStore({
  state: {
    products: [] as Array<Product>
  },
  mutations: {
    setProducts: (state, products: Array<Product>) => (state.products = products),
    addNewProduct: (state, newProduct: Product) => (state.products.push(newProduct)),
    deleteProduct: (state, id) => (state.products = state.products.filter(product => product.id !== id))
  },
  actions: {
    async fetchProducts({ commit }) {
      const res = await fetch("api/products");
      const data = await res.json();
      commit("setProducts", data);
    },
    async addNewProduct({commit}, newProduct: Product) {
      const res = await fetch("api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
      });

      const data = await res.json();
      commit("addNewProduct", data);
    },
    deleteProduct({ commit }, id) {
      fetch(`api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(() => {
        commit("deleteProduct", id)
      })
      .catch(er => (console.log(er)))
    }
  },
  modules: {}
});
