import { createStore } from "vuex";

interface Product {
  id: String;
  title: String;
  inventory: Number;
  buyPrice: Number;
  sellPrice: Number;
}

export interface State {
  products: Array<Product>;
}

export default createStore<State>({
  state: {
    products: []
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
