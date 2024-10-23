import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../HelloWorld.vue';

const routes: Array<RouteRecordRaw> = [  
  {
    path: '/',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HelloWorld
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
