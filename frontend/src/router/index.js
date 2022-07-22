import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import { useAuthStore } from '../stores/authStore';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
      meta: {
        auth: true
      }
    }
  ]
});
const currentUser = () => {
  return new Promise((resolve, reject) => {
    const store = useAuthStore();
    const token = store.user
    resolve(token);
    reject
  })
};

router.beforeEach( async (to, from, next) => {
  if(to.matched.some((record) => record.meta.auth)) {
    if (await currentUser()) {
      next()
    } else {
      next("/login")
    }
  } else {
    next()
  }
})

export default router
