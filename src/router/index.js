import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/home-page.vue";
import VideoplayerPage from "../pages/videoplayer-page.vue";
import NotFound from "../pages/not-found-page.vue";

const routes = [
    { path: "/", name: "Home", component: HomePage },
    { path: "/video/:id", name: "VideoPlayerPage", component: VideoplayerPage, props: true },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
