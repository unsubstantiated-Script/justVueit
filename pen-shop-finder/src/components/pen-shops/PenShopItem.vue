<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="removeResource(id)"
          >Delete</base-button
        >
      </header>
      <p>{{ description }}</p>
      <nav>
        <a target="_blank" :href="link">View Shop</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  inject: ['removeResource'],
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
  color: #261a0c;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #594832;
}

a:hover,
a:active {
  color: #a69880;
}
</style>