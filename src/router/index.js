import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';

const routes = [
    {
        path: "/portfolio-nicolas/",
        /* path: "/", */
        name: "Home",
        component: Home
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})