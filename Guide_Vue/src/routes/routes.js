import Principal from "../views/topics.vue"
import whatIs from "../views/whatIs.vue"
import requirements from "../views/requirements.vue"
import createProject from "../views/createProject.vue"
import interpolation from "../views/interpolation.vue"
import directivesVue from "../views/directivesVue.vue"


import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", component: Principal },
    { path: "/whatIs", component: whatIs },
    { path: "/requirements", component: requirements },
    { path: "/createProject", component: createProject },
    { path: "/interpolation", component: interpolation },
    { path: "/directivesVue", component: directivesVue }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})