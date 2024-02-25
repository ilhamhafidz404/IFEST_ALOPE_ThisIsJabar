import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Detail from "../views/Detail.vue";
import Activity from "../views/Activity.vue";
import News from "../views/News.vue";
import Map from "../views/Map.vue";
import Component from "../views/Components.vue";
// import Subscription from "../views/Subscription.vue";

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
    {
      path: "/news",
      name: "news",
      component: News,
    },
    // {
    //   path: "/subscription",
    //   name: "subscription",
    //   component: Subscription,
    // },
    {
      path: "/map",
      name: "map",
      component: Map,
    },
    {
      path: "/component",
      name: "component",
      component: Component,
    },
  ],
});

export default router;
