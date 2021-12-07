<template>
  <the-header title="Online Pen Shops"></the-header>
  <the-shops></the-shops>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheShops from './components/pen-shops/TheShops.vue';

export default {
  components: {
    TheHeader,
    TheShops,
  },
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>