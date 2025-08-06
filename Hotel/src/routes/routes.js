import Gastronomy from "../views/Gastronomy.vue"
import Services from "../views/Services.vue"
import Deports from "../views/Deports.vue"
import Rooms from "../views/Rooms.vue"
import Presentation from "../views/Presentation.vue"
//import { Component, createRouter, createWebHashHistory } from "vue-router"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", component: Presentation },
    { path: "/Gastronomia", component: Gastronomy },
    { path: "/Servicios", component: Services },
    { path: "/Deportes", component: Deports },
    { path: "/Habitaciones", component: Rooms },
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})