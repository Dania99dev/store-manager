<template>
  <div class="login">
    <div class="container border">
      <img src="../assets/images/online-shopping.svg" alt="online-shopping" />
      <div class="seperator"></div>
      <form>
        <h1>Sign in</h1>
        <div class="form-control">
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div class="form-control">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit" class="border-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  components: {}
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.login {
  background-color: $main;
  min-height: 100vh;
  padding: 1rem;
}
.border {
  border-radius: 20px;
}
.border-button {
  border-radius: 50px;
}
.container {
  background-color: $light-shades;
  box-shadow: 2px 2px 10px rgba($dark-shades, 0.25);
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container img {
  width: 75%;
}
.seperator {
  height: 1px;
  width: 25%;
  background-color: rgba($dark-shades, 0.3);
  margin: 1.5rem;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
form h1 {
  text-align: center;
  margin-bottom: 1rem;
}
.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
}
.form-control label {
  margin-bottom: 0.25rem;
}
.form-control input {
  font-size: 0.875rem;
  border: 1px solid transparent;
  background: transparent;
  border-bottom: 1px solid $dark-shades;
  padding: 0.5rem;
  outline: none;
}
.form-control input:focus {
  border: 1px solid $dark-shades;
}
form button {
  outline: none;
  font-size: 1rem;
  border: none;
  background-color: $main;
  padding: 0.75rem;
  margin-top: 2rem;
  cursor: pointer;
  transition-duration: 0.1s;
}
form button:hover {
  background-color: rgba($main, 0.8);
}

@media (min-width: 640px) {
  .login {
    padding: 4rem 8rem;
  }
}

@media (min-width: 1024px) {
  .login {
    display: flex;
    align-items: center;
  }
  .container {
    flex-direction: row;
  }
  .container img {
    width: 50%;
  }
  .seperator {
    height: 5rem;
    width: 1px;
    margin: 1.5rem;
  }
  form h1 {
    text-align: left;
  }
  form button {
    width: 40%;
  }
}
@media (min-width: 1280px) {
  .login {
    padding: 4rem 18rem;
  }
}
</style>
