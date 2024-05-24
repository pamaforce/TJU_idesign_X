import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/exhibition',
            name: 'Exhibition',
            component: () => import('../views/Exhibition.vue')
        },
        {
            path: '/graduate',
            name: 'Graduate',
            component: () => import('../views/Graduate.vue')
        },
        {
            path: '/sponsor',
            name: 'Sponsor',
            component: () => import('../views/Sponsor.vue')
        },
        {
            path: '/search',
            name: 'Search',
            component: () => import('../views/Search.vue')
        }
    ]
})

export default router
