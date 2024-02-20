import { createRouter, createWebHistory } from "vue-router";

// search
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Detail from "../views/Detail.vue";
import Activity from "../views/Activity.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
    },
    {
      path: "/activity",
      name: "activity",
      component: Activity,
    },
  ],
});

export default router;
