<template>
  <div class="products">
    <h1>Products</h1>
    <form>
      <input type="search" name="search" />
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
    <button><i class="fas fa-plus"></i> Add product</button>
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
        <td>{{ product.buyPrice }}</td>
        <td>{{ product.sellPrice }}</td>
      </tr>
      <tr>
        Total:
        {{
          products.length
        }}
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
export default defineComponent({
  name: "Products",
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
</style>
