import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ProjectPage from "@/views/ProjectPage.vue";
import HomePage from "@/views/HomePage.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/projetos',
        name: 'ProjectPage',
        component: ProjectPage,
    },
    // Adicione mais rotas conforme necessário
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
