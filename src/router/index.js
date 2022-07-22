import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView')
  },
   /**
         * Admin routes
         */
    {
      path: "/admin",
      name: "admin",
      component: () => import("./views/admin/dashboard.vue"),
      meta: {
        layout: AdminLayout
      }
  },
  {
      path: "/admin/components/buttons",
      name: "buttons",
      component: () => import("./views/admin/buttons.vue"),
      meta: {
        layout: AdminLayout
      }
  },
  {
      path: "/admin/components/cards",
      name: "cards",
      component: () => import("./views/admin/cards.vue"),
      meta: {
        layout: AdminLayout
      }
  },
  {
      path: "/admin/utilities/colors",
      name: "colors",
      component: () => import("./views/admin/colors.vue"),
      meta: {
        layout: AdminLayout
      }
  },
  {
      path: "/admin/utilities/borders",
      name: "borders",
      component: () => import("./views/admin/borders.vue"),
      meta: {
        layout: AdminLayout
      }
  },
  {
      path: "/admin/utilities/animations",
      name: "animations",
      component: () => import("./views/admin/animations.vue"),
      meta: {
        layout: AdminLayout
      }
  },
  {
      path: "/admin/utilities/other",
      name: "other",
      component: () => import("./views/admin/other.vue"),
      meta: {
        layout: AdminLayout
      }
  },
  {
      path: "/admin/pages/page-not-found",
      name: "page-not-found",
      component: () => import("./views/admin/page-not-found.vue"),
      meta: {
        layout: AdminLayout
      }
  },
  {
      path: "/admin/pages/blank",
      name: "blank",
      component: () => import("./views/admin/blank.vue"),
      meta: {
        layout: AdminLayout
      }
  },
  {
      path: "/admin/charts",
      name: "charts",
      component: () => import("./views/admin/charts.vue"),
      meta: {
        layout: AdminLayout
      }
  },
  {
      path: "/admin/tables",
      name: "tables",
      component: () => import("./views/admin/tables.vue"),
      meta: {
        layout: AdminLayout
      }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
