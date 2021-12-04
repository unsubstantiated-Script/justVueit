<template>
  <div>
    <active-user :userName="user.name" :userAge="user.age" />
    <user-data @set-data="setUserData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Jimbo",
        age: 0,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name,
        // Quickly converting to a number before storing...
        age: +age,
      };
    },
  },
};
</script>


<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  padding: 2rem;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
input {
  margin-bottom: 2rem;
}
</style>

