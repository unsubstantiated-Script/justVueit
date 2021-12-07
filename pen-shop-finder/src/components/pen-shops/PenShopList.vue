<template>
  <ul>
    <pen-shop-item
      v-for="shop in shops"
      :key="shop.id"
      :title="shop.title"
      :description="shop.description"
      :link="shop.link"
    ></pen-shop-item>
  </ul>
</template>

<script>
import PenShopItem from './PenShopItem.vue';
export default {
  props: {
    shops: {
      type: Array,
    },
  },
  components: {
    PenShopItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>