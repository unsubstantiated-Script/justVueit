import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

import App from './App.vue';

const router = createRouter({
  // History setup
  history: createWebHistory(),
  // Routes array
  routes: [
    {
      path: '/teams',
      component: TeamsList,
    },
    {
      path: '/users',
      component: UsersList,
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
