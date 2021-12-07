<template>
  <the-header title="Online Pen Shops"></the-header>
  <pen-shop-list :shops="shops"> </pen-shop-list>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import PenShopList from './components/pen-shops/PenShopList.vue';

export default {
  components: {
    PenShopList,
    TheHeader,
  },
  data() {
    return {
      shops: [
        {
          id: 'cult-pens',
          title: 'Cult Pens',
          description: 'UK based stationery shop',
          link: 'https://www.cultpens.com/',
        },
        {
          id: 'pure-pens',
          title: 'Pure Pens',
          description: 'Welsh stationery shop with a custom line of inks',
          link: 'https://www.purepens.co.uk/',
        },
      ],
    };
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