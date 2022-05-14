import { createWebHistory, createRouter } from 'vue-router';

import IndexPage from '../components/IndexPage.vue';
import ItemShop from '../components/ItemShop.vue';

const routes = [
    { 
        name: "index",
        path: '/home',
        alias: '/',
        component: IndexPage 
    },
    {
        name: "shop",
        path: '/itemshop',
        component: ItemShop
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;