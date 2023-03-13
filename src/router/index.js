import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import SingleTodo from "../components/SingleTodo.vue";
import Test from "../components/Test.vue";

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
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
