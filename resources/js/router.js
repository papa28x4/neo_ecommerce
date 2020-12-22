import Vue from 'vue' 
import Router from 'vue-router' 
import App from './components/App'
import Home from './components/Home'
import Login from './components/Login' 
import Register from './components/Register' 
import SingleProduct from './components/SingleProduct' 
import Checkout from './components/Checkout' 
import Confirmation from './components/Confirmation'
import UserBoard from './components/UserBoard' 
import Admin from './components/Admin'
Vue.use(Router)



const routes = [ 
    { path: '/', name: 'home', component: Home }, 
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register }, 
    { path: '/products/:id', name: 'single-products', component: SingleProduct},
    { path: '/confirmation', name: 'confirmation', component: Confirmation },
    { path: '/checkout', name: 'checkout', component: Checkout, props: (route) => ({ pid: route.query.pid }) },
    { path: '/dashboard', name: 'userboard', component: UserBoard, meta: { requiresAuth: true, is_user: true } }, 
    { path: '/admin/:page', name: 'admin-pages', component: Admin, meta: { requiresAuth: true, is_admin: true } }, 
    { path: '/admin', name: 'admin', component: Admin, meta: { requiresAuth: true, is_admin: true } }
 ]




export default new Router({
    routes,
    mode: 'history'
})