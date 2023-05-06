import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "../components/LoginPage";

const routes = [
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
