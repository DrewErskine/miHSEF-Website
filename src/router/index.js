import { createRouter, createWebHistory } from 'vue-router';
import HomePageView from '../views/HomePageView.vue';
import SignUpView from '../views/SignUpView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePageView },
  { path: '/signup', name: 'SignUp', component: SignUpView },

];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router; 

