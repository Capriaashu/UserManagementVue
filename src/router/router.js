import { createRouter, createWebHistory } from 'vue-router'

const routes= [
    {
      path: '/',
      name: 'signup',
      component: () => import('../views/login/SignUp.vue')
    },
    {
      path: '/login-user',
      name: 'login-user',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: "/usersList",
      name: "usersList",
      component: () => import("../views/UsersList.vue")
    },
    {
      path: "/user/:id",
      name: "user-details",
      component: () => import("../views/Users.vue")
    },
    {
      path: "/addUser",
      name: "add-user",
      component: () => import("../views/AddUser.vue")
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router
