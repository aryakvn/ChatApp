import { createRouter, createWebHistory } from "vue-router";
import ChatView from "../views/ChatView.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: ChatView,
    },
  ],
});
