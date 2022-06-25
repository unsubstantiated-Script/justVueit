<template>
  <button @click="login" v-if="!userAuth">Login</button>
  <button @click="logout" v-if="userAuth">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters({ userAuth: 'userIsAuthenticated' }),
  },
};
</script>