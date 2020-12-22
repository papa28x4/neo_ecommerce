/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import router from './router'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

router.beforeEach((to, from, next) => { 
    if (to.matched.some(record => record.meta.requiresAuth)) { 
        if (localStorage.getItem('bigStore.jwt') == null) {
            next({ path: '/login', params: { nextUrl: to.fullPath } })
         } else { 
             let user = JSON.parse(localStorage.getItem('bigStore.user')) 
             if (to.matched.some(record => record.meta.is_admin)) { 
                 if (user.is_admin == 1) { 
                     next()
                 } else {
                      next({ name: 'userboard' })
                 } 
            } else if (to.matched.some(record => record.meta.is_user)) { 
                if (user.is_admin == 0) { 
                    next() 
                } else { 
                    next({ name: 'admin' })
                } 
            } next() 
        } 
    } else { 
        next()
     } 
})
 
Vue.component('app', require('./components/App.vue').default)
const app = new Vue({
    el: '#app',
    router, 
});

