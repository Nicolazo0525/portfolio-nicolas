import { createRouter, createWebHistory } from 'vue-router';

import AboutMe from '../components/Categories/AboutMe.vue';
import Study from '../components/Categories/Study.vue';
import Project from '../components/Categories/Project.vue';
import Skill from '../components/Categories/Skill.vue';
import Media from '../components/Categories/Media.vue';


const routes = [
    {
        /* path: "/portfolio-nicolas/", */
        path: "/",
        name: "AboutMe",
        component: AboutMe
    },
    /* {
        path: "/portfolio-nicolas/about-me/",
        name: "AboutMe",
        component: AboutMe
    }, */
    {
        path: "/skills/",
        name: "Skill",
        component: Skill
    },
    {
        path: "/projects/",
        name: "Project",
        component: Project
    },
    {
        path: "/studies/",
        name: "Study",
        component: Study
    },
    {
        path: "/media/",
        name: "Media",
        component: Media
    }
]

/* const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router */

export default createRouter({
    history: createWebHistory(),
    routes
})