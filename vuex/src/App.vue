<template>
  <base-container title="Vuex">
    <!-- Bringing in the store state  -->
    <the-counter></the-counter>
    <button @click="deleteOne">Delete 1</button>
    <button @click="addOne">Add 1</button>
    <button @click="increaseIt">Increase by</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      //Grabbing onto the mutator
      this.$store.commit('increment');
    },
    deleteOne() {
      this.$store.commit('decrement');
    },
    // increaseIt() {
    //   this.$store.commit('increase', { value: 10 });
    // },
    increaseIt() {
      this.$store.commit({ type: 'increase', value: 10 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
