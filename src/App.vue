<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <form-t></form-t>

    <div>
      <pre-cart></pre-cart>
    </div>
    <div>
      <cart></cart>
    </div>
  </div>
</template>

<script>
import Cart from "./components/Cart.vue";
import PreCart from "./components/PreCart.vue";
import FormT from "./components/FormT.vue"

export default {
  name: "app",
  components: {
    Cart,
    PreCart,
    FormT
  },
  methods: {
    login() {
      
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
