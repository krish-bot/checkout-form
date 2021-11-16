import { createWebHistory,createRouter } from "vue-router";
import checkout from '@/components/checkOut.vue'

const routes = [
    {
        path: '/',
        name: 'Checkout',
        component: checkout,
        
    },
    {
        path: '/greetings-form',
        name: 'Greetings',
        component: () => import('@/components/acknowledge'),
    }] 

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;
  

