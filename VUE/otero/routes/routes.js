import button from "../src/components/button.vue"
import cards from "../src/components/cards.vue"
import {createRouter,createWebHashHistory} from "vue-router"

const routes=[
    {path:"/",component:cards},
    {path:"/home",component:button, beforeEnter:requiredAuth}
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})