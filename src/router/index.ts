import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior() {
        return {top: 0};
    },
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
        },
        {
            path: '/exhibition_mobile',
            name: 'ExhibitionMobile',
            component: () => import('../views/ExhibitionMobile.vue')
        },
        {
            path: '/menu',
            name: 'Menu',
            component: () => import('../views/Menu.vue')
        },
        {
            path: '/exhibition/100',
            name: 'ExhibitionDetailXMobile',
            component: () => import('../views/ExhibitionDetailXMobile.vue')
        },
        {
            path: '/exhibition/:category_id',
            name: 'ExhibitionDetailMobile',
            component: () => import('../views/ExhibitionDetailMobile.vue')
        },
        {
            path: '/exhibition/:category_id/:id',
            name: 'Detail',
            component: () => import ('../views/Detail.vue'),
            props: (route) => ({
                list: route.query.list,
                current: route.query.current,
                from: route.query.from
            })
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.name === 'Exhibition'|| to.name === 'Home') {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }
    next();
});
export default router
