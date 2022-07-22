import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLayout from "../views/admin/layout/index";
import store from '../store'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login/index.vue'),
    meta: { guest : true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView'),
    meta: { guest : true }
  },
  /**
    * Admin routes
  */
  {
  path: "/admin",
  name: "admin",
  component: () => import("../views/admin/DashboardView.vue"),
  meta: {
      layout: AdminLayout,
      secure : true
  }
  },
  {
    path: "/admin/profile",
    name: "profile",
    component: () => import("../views/admin/ProfileView.vue"),
    meta: {
        layout: AdminLayout,
        secure : true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.secure)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.auth.loggedIn == false) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } 
  else if(to.matched.some(record => record.meta.guest)) {
      if (store.state.auth.loggedIn == false) {
          next()
        } else {
          next({
              path: '/'
            })
        } 
    }
  else {
    next() // make sure to always call next()!
  }
})

export default router
