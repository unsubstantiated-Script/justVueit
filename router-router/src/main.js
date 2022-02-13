import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import App from './App.vue';

const router = createRouter({
  // History setup
  history: createWebHistory(),
  // Routes array
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      //Can name the route to truncate things
      name: 'teams',
      path: '/teams',
      meta: {},
      // component: TeamsList,
      components: { default: TeamsList, footer: TeamsFooter },
      //   nested routes
      children: [
        // adding in route parameters
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          //   allows access to params as props as well
          props: true,
        },
      ],
    },
    // // adding in route parameters
    // {
    //   path: '/teams/:teamId',
    //   component: TeamMembers,
    //   //   allows access to params as props as well
    //   props: true,
    // },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
    },
    // 404 stuff needs to come last else it will override the above routes as well
    { path: '/:notFound(.*)', component: NotFound },
  ],
  //   Changes name of active link key for the CSS
  linkActiveClass: 'active',
  // Controlling auto scroll with vue
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

//This happens before the page is loaded guards/cancel navication if no bueno. No access...

router.beforeEach(function (to, from, next) {
  console.log(to, from);
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
