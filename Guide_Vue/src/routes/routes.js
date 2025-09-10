import Principal from "../views/topics.vue"
import whatIs from "../views/whatIs.vue"
import requirements from "../views/requirements.vue"
import createProject from "../views/createProject.vue"


import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", component: Principal },
    { path: "/whatIs", component: whatIs },
    { path: "/requirements", component: requirements },
    { path: "/createProject", component: createProject },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})