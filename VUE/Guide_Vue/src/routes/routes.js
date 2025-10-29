import { createRouter, createWebHashHistory } from "vue-router"

import Principal from "../views/topics.vue"
import whatIs from "../views/whatIs.vue"
import requirements from "../views/requirements.vue"
import createProject from "../views/createProject.vue"
import interpolation from "../views/interpolation.vue"
import directivesVue from "../views/directivesVue.vue"
import optionsApi from "../views/optionsApi.vue"
import compositionApi from "../views/compositionApi.vue"
import cicleOfLife from "../views/cicleOfLife.vue"
import importComponents from "../views/importComponents.vue"
import props from "../views/props.vue"
import templateQuasar from "../views/templateQuasar.vue"
import templateQuasarInstall from "../views/templateQuasarInstallVue.vue"
import vueRouter from "../views/vueRouter.vue"
import pinia from "../views/pinia.vue"
import piniaplugin from "../views/piniaplugin.vue"

const routes = [
    { path: "/", component: Principal },
    { path: "/whatIs", component: whatIs },
    { path: "/requirements", component: requirements },
    { path: "/createProject", component: createProject },
    { path: "/interpolation", component: interpolation },
    { path: "/directivesVue", component: directivesVue },
    { path: "/optionsApi", component: optionsApi },
    { path: "/compositionApi", component: compositionApi },
    { path: "/cicleOfLife", component: cicleOfLife },
    { path: "/importComponents", component: importComponents },
    { path: "/props", component: props },
    { path: "/templateQuasar", component: templateQuasar },
    { path: "/templateQuasarInstall", component: templateQuasarInstall },
    { path: "/vueRouter", component: vueRouter },
    { path: "/pinia", component: pinia },
    { path: "/piniaplugin", component: piniaplugin },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})