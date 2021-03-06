<template>
  <form>
    <div class="form-control">
      <label>Title:</label>
      <input type="text" name="title" />
    </div>
    <div class="form-control">
      <label>Number:</label>
      <input type="number" name="number" min="1" />
    </div>
    <div class="form-control">
      <label>Buy price:</label>
      <input type="number" name="buy" min="0" />
    </div>
    <div class="form-control">
      <label>Sell price:</label>
      <input type="number" name="sell" min="0" />
    </div>
    <input type="submit" value="Add" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddProduct"
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

// TODO: styling based on "mobile first"

form {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 100%;
  .form-control {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    margin-left: 0;

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
    border: 1px solid $main;
    background-color: $main;
    margin-bottom: 1rem;
    padding: 0.5rem 3rem;
    border-radius: 0.5rem;
    transition-duration: 0.1s;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: rgba($main, 0.8);
    }
  }
}
</style>
