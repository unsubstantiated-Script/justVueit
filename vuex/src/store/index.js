import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter/index.js';
// Configuring the store w/ an object
const store = createStore({
  modules: {
    numbers: counterModule,
  },
  //Global state
  state() {
    return {
      isLoggedIn: false,
    };
  },
  //Global methods. Can pass data with a second param called payload here
  //Mutations must be sychronus
  mutations: rootMutations,
  // Asynchronus code here can call mutations above
  actions: rootActions,
  getters: rootGetters,
});

export default store;
