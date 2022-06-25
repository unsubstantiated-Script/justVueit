<template>
  <h3>{{ counter }}</h3>
  <p>Some other stufz</p>
</template>

<script>
export default {
  computed: {
    counter() {
      //First place we invoke this
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>