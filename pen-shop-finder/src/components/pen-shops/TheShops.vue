<template>
  <base-card>
    <!-- Actually toggled the component name here we needed to see... -->
    <!-- Also toggling button style here based upon which tab is active -->
    <base-button @click="changeTab('pen-shop-list')" :mode="shopListButtonMode"
      >Stores</base-button
    >
    <base-button @click="changeTab('add-shop')" :mode="addShopButtonMode"
      >Add a Store</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import PenShopList from './PenShopList.vue';
import AddShop from './AddShop.vue';

export default {
  components: {
    PenShopList,
    AddShop,
  },
  data() {
    return {
      selectedTab: 'pen-shop-list',
      storedShops: [
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
  provide() {
    return {
      shops: this.storedShops,
    };
  },
  computed: {
    shopListButtonMode() {
      return this.selectedTab === 'pen-shop-list' ? null : 'flat';
    },
    addShopButtonMode() {
      return this.selectedTab === 'add-shop' ? null : 'flat';
    },
  },
  methods: {
    changeTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>