
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";

const View = () => import(/* webpackChunkName: "about" */ "../views/viewBoard/View.vue")

const Login = () => import(/* webpackChunkName: "about" */ "../views/login/Login.vue")

const Join = () => import(/* webpackChunkName: "about" */ "../views/login/Join.vue")

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/view",
    name: "View",
    component: View
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/join",
    name: "Join",
    component: Join
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
