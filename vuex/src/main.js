import { createApp } from 'vue';

//Brining in the store for vuex
import { createStore } from 'vuex';
import App from './App.vue';

// Configuring the store w/ an object
const store = createStore({
  //Global state
  state() {
    return {
      counter: 0,
    };
  },
  //Global methods. Can pass data with a second param called payload here
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
});

const app = createApp(App);

//Calling the store into existence and it is now useable through the entire app.
app.use(store);

app.mount('#app');
