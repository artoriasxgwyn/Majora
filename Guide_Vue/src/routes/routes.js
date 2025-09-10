import Principal from "../views/topics.vue"


import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", component: Principal },
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})