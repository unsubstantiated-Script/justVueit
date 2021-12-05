<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" :anotherItem="'...'"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Doobey Doobey Do", "I am the walrus!"],
    };
  },
};
</script>