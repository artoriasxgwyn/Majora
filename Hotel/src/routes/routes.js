import Gastronomy from "../components/Gastronomy.vue"
import Services from "../components/Services.vue"
import Deports from "../components/Deports.vue"
import Rooms from "../components/Rooms.vue"
import Presentation from "../components/Presentation.vue"
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