import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({

  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/', component: load('Index') },
    { path: '/donate', component: load('Donate') },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
