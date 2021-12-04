<template>
  <section>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
  </section>
</template>

<script>
// Declare props where you catch em!
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    userAge: {
      type: Number,
      required: true,
    },
  },
};
</script>

