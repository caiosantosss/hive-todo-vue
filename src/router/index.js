import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import SingleTodo from "../components/SingleTodo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/task/:id",
    name: "singleTodo",
    component: SingleTodo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
