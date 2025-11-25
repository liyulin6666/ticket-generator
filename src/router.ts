import { createRouter, createWebHistory } from "vue-router";

import QrPage from "./pages/QrPage.vue";
import TicketPage from "./pages/TicketPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: QrPage },
    { path: "/ticket", component: TicketPage },
  ],
});

export default router;
