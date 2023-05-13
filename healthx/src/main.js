import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import SignupPage from "./components/SignupPage.vue";
import AddFood from "./components/AddFood";
import ShowData from "./components/ShowData";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/",
    name: "signup",
    component: SignupPage,
  },
  {
    path: "/showdata",
    name: "showdata",
    component: ShowData,
  },
  {
    path: "/addfood",
    name: "addfood",
    component: AddFood,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
