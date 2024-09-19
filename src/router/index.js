import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Posts from '../components/Posts.vue';
import Users from '../components/Users.vue';


const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true'; 
};

const routes = [
  { path: '/', component: Login },
  { 
    path: '/posts', 
    component: Posts,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next(); 
      } else {
        next('/'); 
      }
    }
  },
  { 
    path: '/users', 
    component: Users,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
