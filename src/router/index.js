import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import UserView from '@/views/UserView.vue'
import RecoverPasswordView from '@/views/RecoverPasswordView.vue'
import RegisterView from '@/views/RegisterView.vue'
import Page404View from '@/views/Page404View.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'DefaultLayout',
            component: DefaultLayout,
        },
        {
            path: '/recover-password',
            name: 'RecoverPasswordView',
            component: RecoverPasswordView,
        },
        {
            path: '/register',
            name: 'RegisterView',
            component: RegisterView,
        },
        {
            path: '/user',
            name: 'UserView',
            component: UserView,
        },
        {
            path: '/:catchAll(.*)',
            component: Page404View,
        },
    ],
})

export default router
