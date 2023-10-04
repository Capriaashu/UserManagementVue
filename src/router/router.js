import { createRouter, createWebHistory } from 'vue-router'

// Define the routes for your application
const routes= [
  {
    path: '/',
    name: 'signup',
    component: () => import('../views/login/SignUp.vue'), // Lazily load the component
   // meta: { requiresAuth: true },
  },
  {
    path: '/login-user',
    name: 'login-user',
    component: () => import('../views/login/Login.vue'), // Lazily load the component
    meta: { requiresAuth: true },
  },
  {
    path: "/usersList",
    name: "usersList",
    component: () => import("../views/list-user/UserList.vue"), // Lazily load the component
    meta: { requiresAuth: true },
  },
  {
    path: "/user/:id",
    name: "user-details",
    component: () => import("../views/edit-user/EditUser.vue"), // Lazily load the component
    meta: { requiresAuth: true },
  },
  {
    path: "/addUser",
    name: "add-user",
    component: () => import("../views/add-user/AddUser.vue"), // Lazily load the component
    meta: { requiresAuth: true },
  }
]

// Create the router instance with history mode and routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router
