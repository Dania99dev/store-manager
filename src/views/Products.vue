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
      <tr>
        <td>1</td>
        <td>Michael Kors Men's Slim Runway Stainless Steel Quartz Watch</td>
        <td>5</td>
        <td>89</td>
        <td>118.94</td>
      </tr>
    </table>

    <p>54 products</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Products"
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
</style>
