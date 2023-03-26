//define all custom routes (not use default routes from vue)
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);

const routes = [
    {path: '/', name: 'index', component: page('index.vue') },
    {path: '/login', name: 'login', component: page('auth/login.vue') },
    {path: '/register', name: 'register', component:page('auth/register.vue') },
    {path: '/verification/verify/:id', name: 'verify', component:page('auth/verification/verify.vue') },
    {path: '/verification/resend', name: 'resend', component:page('auth/verification/resend.vue') },
    {path: '/password/email', name: 'email', component:page('auth/password/reset-email.vue') },
    {path: '/user/dashboard', name: 'dashboard', component:page('user/dashboard.vue') },
    {path: '/upload', name: 'upload', component:page('user/designs/create.vue') },
    {path: '/designs/:id/edit', name: 'edit', component:page('user/designs/edit.vue') },
    {path: '/designs', name: 'search', component:page('designs/search.vue') },
    {path: '/design/:slug', name: 'show', component:page('designs/show.vue') },
];

export function createRouter(){
    return new Router(
        {
            routes,
            mode: 'history'
        }
    );
}