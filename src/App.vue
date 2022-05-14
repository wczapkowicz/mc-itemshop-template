<template>
  <header>
    <NavBar/>
  </header>
  <main></main>
  <footer></footer>
</template>

<script>
import NavBar from './components/Navbar.vue'

export default {
  name: 'ItemShop',
  components: {
    NavBar
  }
}
</script>

<style>
  @import '../public/css/main.scss';
</style>
