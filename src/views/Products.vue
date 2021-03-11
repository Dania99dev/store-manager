<template>
  <div class="products">
    <h1>Products</h1>
    <div class="actions">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        v-model="searchString"
        autocomplete="off"
      />
      <button
        @click="addFormVisibility = !addFormVisibility"
        :class="
          `form-toggler ${addFormVisibility ? 'form-toggler-active' : ''}`
        "
      >
        <i :class="`fas ${addFormVisibility ? 'fa-minus' : 'fa-plus'}`"></i>
        {{ addFormVisibility ? "Close" : "Add product" }}
      </button>
    </div>
    <div v-if="addFormVisibility">
      <AddProduct />
    </div>
    <div class="table-wrapper">
      <table>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>No.</th>
          <th>Buy price</th>
          <th>Sell price</th>
        </tr>
        <tr v-for="(product, index) in filteredProducts" :key="product.id">
          <td>{{ index + 1 }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.inventory }}</td>
          <td>{{ product.buyPrice }}$</td>
          <td>{{ product.sellPrice }}$</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { Product } from "../types";

import AddProduct from "../components/AddProduct.vue";

export default defineComponent({
  name: "Products",
  components: {
    AddProduct
  },
  data() {
    return {
      addFormVisibility: false,
      searchString: ""
    };
  },
  computed: {
    ...mapState(["products"]),
    filteredProducts: function(): Array<Product> {
      return this.products.filter((product: Product) =>
        product.title.toLowerCase().includes(this.searchString.toLowerCase())
      );
    }
  },
  methods: {
    ...mapActions(["fetchProducts"])
  },
  created() {
    this.fetchProducts();
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.products {
  padding: 1rem;
  min-height: 100vh;
  background-color: $light-shades;
}
h1 {
  color: $main;
}
.actions {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  input {
    border: 1px solid rgba($dark-shades, 0.2);
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: transparent;
    margin-bottom: 1rem;
    &:focus {
      border: 1px solid rgba($dark-shades, 0.5);
      outline: none;
    }
  }
  .form-toggler {
    border: 1px solid $primary;
    background-color: $primary;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    width: fit-content;
    .fas {
      margin-right: 5px;
    }
    &:focus {
      outline: none;
    }
    &:hover {
      border: 1px solid rgba($primary, 0.8);
      background-color: rgba($primary, 0.8);
    }
  }
  .form-toggler-active {
    border: 1px solid $danger;
    background-color: $danger;
    color: $light-shades;
    &:hover {
      border: 1px solid rgba($danger, 0.8);
      background-color: rgba($danger, 0.8);
    }
    .fas {
      color: $light-shades;
    }
  }
}
.table-wrapper {
  overflow-x: auto;
  padding: 1rem 0;
  table {
    min-width: 500px;
    border-spacing: 0;
    border: 1px solid rgba($dark-shades, 0.4);
    border-radius: 0.5rem;
    width: 100%;
    tr {
      th {
        text-align: left;
        padding: 0.5rem;
      }
      td {
        padding: 0.5rem;
      }
      &:nth-child(even) {
        background-color: rgba($light-accent, 0.2);
      }
    }
  }
}

// * Media queries
// Tablet
@media (min-width: 640px) {
  .products {
    padding: 1rem 4rem;
  }
  .actions {
    flex-direction: row;
    justify-content: space-between;
    input {
      margin-right: 10rem;
      margin-bottom: 0;
      flex: 1;
    }
  }
}
// Laptop
@media (min-width: 1024px) {
  .products {
    padding: 1rem 6rem;
  }
  .actions {
    input {
      margin-right: 20rem;
    }
  }
}
// Desktop
@media (min-width: 1280px) {
  .products {
    padding: 1rem 8rem;
  }
  .actions {
    input {
      margin-right: 40rem;
    }
  }
}
</style>
