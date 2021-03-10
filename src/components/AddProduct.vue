<template>
  <form @submit.prevent="addProduct">
    <div class="form-control">
      <label>Title:</label>
      <input type="text" name="title" v-model="title" required />
    </div>
    <div class="form-control">
      <label>Number:</label>
      <input type="number" name="number" min="1" v-model="number" required />
    </div>
    <div class="form-control">
      <label>Buy price:</label>
      <input type="number" name="buy" min="0" v-model="buyPrice" required />
    </div>
    <div class="form-control">
      <label>Sell price:</label>
      <input type="number" name="sell" min="0" v-model="sellPrice" required />
    </div>
    <input type="submit" value="Add" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "AddProduct",
  data() {
    return {
      title: "",
      number: null,
      buyPrice: null,
      sellPrice: null
    };
  },
  methods: {
    ...mapActions(["addNewProduct"]),
    addProduct() {
      const newProduct = {
        title: this.title,
        inventory: this.number,
        buyPrice: this.buyPrice,
        sellPrice: this.sellPrice
      };
      this.addNewProduct(newProduct);
      this.title = "";
      this.number = null;
      this.buyPrice = null;
      this.sellPrice = null;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0;
  .form-control {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    label {
      margin-bottom: 2px;
    }
  }
  input[type="text"],
  input[type="number"] {
    border: 1px solid rgba($dark-shades, 0.2);
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: transparent;
    &:focus {
      border: 1px solid rgba($dark-shades, 0.5);
      outline: none;
    }
  }
  input[type="submit"] {
    border: 1px solid $primary;
    background-color: $primary;
    margin: 1rem 0;
    width: 8.75rem;
    padding: 0.5rem 0;
    border-radius: 0.5rem;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: rgba($primary, 0.8);
    }
  }
}

// laptop
@media (min-width: 1024px) {
  form {
    flex-direction: row;
    align-items: flex-end;
  }
  .form-control {
    margin: 1rem;
    margin-left: 0;
  }
}
</style>
