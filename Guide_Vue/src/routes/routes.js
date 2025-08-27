import Principal from "../views/first.vue"
import Segundo from "../views/second.vue"


import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", component: Principal },
     { path: "/2", component: Segundo },
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})