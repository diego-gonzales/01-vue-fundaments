<template>
  <Indecision />
  <!-- <Counter :start="10" /> -->
</template>

<script>
import Indecision from './components/Indecision.vue';
// import Counter from './components/Counter.vue';

export default {
  name: 'App',
  components: {
    Indecision,
    // Counter,
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
  margin-top: 60px;
}
</style>
