import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import AboutUs from "@/views/AboutUs.vue";
import ContactUs from "@/views/ContactUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    alias: "/HOME",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    alias: "/ABOUT",
    component: AboutUs,
  },
  {
    path: "/contact",
    name: "Contact",
    alias: "/CONTACT",
    component: ContactUs,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
