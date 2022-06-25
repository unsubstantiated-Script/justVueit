<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    //   // Getters coming in second place we evoke this
    //   return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>