import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import ChatRoom from '../views/ChatRoom.vue';
import getUser from '../composables/getUser';

// Nav guards
const requireAuth = (to, from, next) => {
  // console.log(to, from, next);
  const user = getUser();
  if (user.value) {
    next();
  } else {
    next({ name: 'Welcome' });
  }
};

const requireGuest = (to, from, next) => {
  // console.log(to, from, next);
  const user = getUser();
  if (user.value) {
    next({ name: 'ChatRoom' });
  } else {
    next();
  }
};

// Routes
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireGuest,
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: ChatRoom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
