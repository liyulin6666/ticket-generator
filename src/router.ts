import { createRouter, createWebHistory } from "vue-router";

import TicketPage from "./pages/TicketPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: TicketPage }],
});

export default router;
