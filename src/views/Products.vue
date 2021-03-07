<template>
  <div class="products">
    <h1>Products</h1>
    <div class="actions">
      <form>
        <input type="text" name="search" placeholder="Search..." />
        <button type="submit" class="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </form>
      <button class="add-btn"><i class="fas fa-plus"></i> Add product</button>
    </div>
    <AddProduct />
    <div class="table-wrapper">
      <table>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>No.</th>
          <th>Buy price</th>
          <th>Sell price</th>
        </tr>
        <tr v-for="(product, index) in products" :key="product.key">
          <td>{{ index + 1 }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.inventory }}</td>
          <td>{{ product.buyPrice }}$</td>
          <td>{{ product.sellPrice }}$</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <small>
              <strong>Total: {{ products.length }}</strong>
            </small>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

import AddProduct from "../components/AddProduct.vue";

export default defineComponent({
  name: "Products",
  components: {
    AddProduct
  },
  computed: {
    ...mapState(["products"])
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
.products h1 {
  color: $main;
}
.actions {
  display: flex;
  flex-direction: column;

  form,
  .add-btn {
    margin: 1rem 0;
  }
  form {
    display: flex;
  }
  form input {
    width: 100%;
    border: 1px solid rgba($dark-shades, 0.2);
    border-right: none;
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 0.5rem;
    background-color: transparent;
    &:focus {
      border: 1px solid rgba($dark-shades, 0.5);
      border-right: none;
      outline: none;
    }
  }
  .add-btn,
  .search-btn {
    border: none;
    background-color: $primary;
    padding: 0.75rem 1rem;
    transition-duration: 0.1s;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: rgba($primary, 0.8);
    }
  }
  .search-btn {
    border-radius: 0 0.5rem 0.5rem 0;
  }
  .add-btn {
    border-radius: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 8.75rem;
  }
}
.table-wrapper {
  overflow-x: auto;
  padding: 0.5rem 0;
}
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
      border-bottom: 1px solid rgba($dark-shades, 0.4);
    }
    td {
      border-bottom: 1px solid rgba($dark-shades, 0.4);
      padding: 0.5rem;
    }
    &:nth-child(even) {
      background-color: rgba($light-accent, 0.2);
    }
    &:last-child {
      background-color: transparent;
      border-bottom: none;
      td {
        border-bottom: none;
      }
    }
  }
}

// Tablet
@media (min-width: 640px) {
  .products {
    padding: 1rem 4rem;
  }
  .actions {
    flex-direction: row;
    justify-content: space-between;
  }
}
// Laptop
@media (min-width: 1024px) {
  .products {
    padding: 1rem 6rem;
  }
}

// Desktop
@media (min-width: 1280px) {
  .products {
    padding: 1rem 8rem;
  }
}
</style>
