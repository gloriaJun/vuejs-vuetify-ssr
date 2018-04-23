import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const meta = require('./meta.json')

// Function to create routes
// Is default lazy but can be changed
function route (path, view) {
  return {
    path: path,
    meta: meta[path],
    component: resolve => import(`@/pages/${view}View.vue`).then(resolve)
  }
}

export function createRouter () {
  return new Router({
    base: __dirname,
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      route('/', 'Welcome'),
      route('/inspire', 'Inspire')
    ]
  })
}

