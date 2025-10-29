import Compras from "../views/Compras.vue"
import Ventas from "../views/Ventas.vue"
import Productos from "../views/Productos.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "../components/Layout.vue"
import Login from "../views/Login.vue"

const routes = [
    {path:"/", component:Login},
    {path:"/layout", component:Layout},
    {path:"/compras", component:Compras},
    {path:"/ventas", component:Ventas},
    {path:"/productos", component:Productos},
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})
