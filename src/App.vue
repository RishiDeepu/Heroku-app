<template>
  <navSection />
  <!-- <nav>
    <router-link to="/">HElloWorld</router-link> |
    <router-link to="/cart">Cart</router-link>
  </nav>
  <router-view /> -->
</template>

<script>
import navSection from './components/navbar.vue'
export default {
  components: {
    navSection

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
