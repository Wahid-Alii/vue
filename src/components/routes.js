import Home from '../components/routeLinks/Home.vue';
import Register from '../components/routeLinks/About.vue';
import Login from '../components/routeLinks/Login.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: Register },
    { path: '/login', component: Login },
];

export default routes;