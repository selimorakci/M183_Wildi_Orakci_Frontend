import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/',
        component: Home,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
