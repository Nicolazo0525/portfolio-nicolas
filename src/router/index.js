import { createRouter, createWebHistory } from 'vue-router';

import AboutMe from '../components/Categories/AboutMe.vue';
import Certificate from '../components/Categories/Certificate.vue';
import Project from '../components/Categories/Project.vue';
import Skill from '../components/Categories/Skill.vue';
import Media from '../components/Categories/Media.vue';


const routes = [
    {
        path: "/portfolio-nicolas/",
        /* path: "/", */
        name: "AboutMe",
        component: AboutMe
    },
    /* {
        path: "/portfolio-nicolas/about-me/",
        name: "AboutMe",
        component: AboutMe
    }, */
    {
        path: "/portfolio-nicolas/project/",
        name: "Project",
        component: Project
    },
    {
        path: "/portfolio-nicolas/certificates/",
        name: "Certificate",
        component: Certificate
    },
    {
        path: "/portfolio-nicolas/skills/",
        name: "Skill",
        component: Skill
    },
    {
        path: "/portfolio-nicolas/media/",
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