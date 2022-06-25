<template >
  <base-container title="Vuex" v-if="userAuth">
    <!-- Bringing in the store state  -->
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="deleteOne">Delete 1</button>
    <button @click="addOne">Add 1</button>
    <button @click="increaseIt">Increase by</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },

    ...mapGetters({ userAuth: 'userIsAuthenticated' }),
  },
  methods: {
    addOne() {
      //Grabbing onto the mutator
      this.$store.commit('numbers/increment');
    },
    deleteOne() {
      this.$store.commit('numbers/decrement');
    },
    // increaseIt() {
    //   this.$store.commit('increase', { value: 10 });
    // },
    //calling the async action
    increaseIt() {
      this.$store.dispatch({ type: 'numbers/increase', value: 10 });
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
