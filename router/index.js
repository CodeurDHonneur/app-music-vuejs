import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { createRouter, createWebHistory} from "vue-router";

const routes = [
{path: "/", component: NotFoundView}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;