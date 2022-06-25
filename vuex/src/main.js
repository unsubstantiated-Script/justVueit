import { createApp } from 'vue';

import store from './store/index.js';

//Brining in the store for vuex

import App from './App.vue';

const app = createApp(App);

//Calling the store into existence and it is now useable through the entire app.
app.use(store);

app.mount('#app');
