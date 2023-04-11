import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import dashboard from '../components/Dashboard.vue'
import AddListSale from '../components/AddListSale.vue'
import AddSale from '../components/AddSale.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard,
        props: {}
    },

    {
        path: '/AddSale',
        name: 'AddSale',
        component: AddSale,
        props: {}
    },
    {
        path: '/AddListSale',
        name: 'AddListSale',
        component: AddListSale,
        props: {}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router