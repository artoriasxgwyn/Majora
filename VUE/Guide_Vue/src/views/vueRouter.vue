<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Vue Router</h1>
      <p class="p">
        <strong>Vue Router</strong> es la librería oficial de enrutamiento para Vue.js. Permite crear aplicaciones de una sola página (SPA) con múltiples vistas y navegación entre ellas sin recargar la página completa.
      </p>

      <hr />

      <h2 class="subtitle">¿Por qué usar Vue Router?</h2>
      <p class="p">
        Vue Router proporciona una experiencia de usuario fluida al permitir la navegación entre diferentes vistas manteniendo el estado de la aplicación. Es esencial para construir aplicaciones Vue complejas con múltiples páginas.
      </p>

      <div class="example">
        <h3 class="example-title">Características Principales</h3>
        <ul>
          <li class="p"><strong>Navegación declarativa:</strong> Usa componentes router-link para navegación</li>
          <li class="p"><strong>Rutas anidadas:</strong> Soporte para layouts complejos</li>
          <li class="p"><strong>Navegación programática:</strong> Control de navegación desde el código</li>
          <li class="p"><strong>Protección de rutas:</strong> Guards para control de acceso</li>
          <li class="p"><strong>Modos de historia:</strong> Hash mode y HTML5 history mode</li>
        </ul>
      </div>

      <hr />

      <h2 class="subtitle">Instalación y Configuración</h2>

      <div class="code-block">
        <h3 class="code-title">Instalación</h3>
        <pre class="code"><code>
// Usando npm
npm install vue-router@4

// Usando yarn
yarn add vue-router@4

// Usando pnpm
pnpm add vue-router@4
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Configuración Básica</h3>
        <pre class="code"><code>
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">RouterView y RouterLink</h2>

      <div class="code-block">
        <h3 class="code-title">App.vue - Componente Raíz</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div id="app"&gt;
    &lt;nav&gt;
      &lt;router-link to="/"&gt;Inicio&lt;/router-link&gt; |
      &lt;router-link to="/about"&gt;Acerca de&lt;/router-link&gt; |
      &lt;router-link :to="{ name: 'Usuario', params: { id: 123 }}"&gt;Usuario 123&lt;/router-link&gt;
    &lt;/nav&gt;
    &lt;router-view /&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Navegación Activa</h3>
        <div class="p">
          <nav class="demo-nav">
            <router-link to="/" class="router-link" active-class="active">Inicio</router-link>
            <router-link to="/about" class="router-link" active-class="active">Acerca de</router-link>
            <router-link to="/contact" class="router-link" active-class="active">Contacto</router-link>
          </nav>
          <p class="demo-text">Ruta actual: <strong>{{ $route.path }}</strong></p>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Rutas Dinámicas y Parámetros</h2>

      <div class="code-block">
        <h3 class="code-title">Definición de Rutas con Parámetros</h3>
        <pre class="code"><code>
// router/index.js
const routes = [
  {
    path: '/usuario/:id',
    name: 'Usuario',
    component: Usuario,
    props: true // Permite pasar params como props
  },
  {
    path: '/producto/:categoria/:id',
    name: 'Producto',
    component: Producto
  }
]
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Componente Usuario.vue</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;Perfil del Usuario&lt;/h1&gt;
    &lt;p&gt;ID del usuario: &lbrace;&lbrace; $route.params.id &rbrace;&rbrace;&lt;/p&gt;
    &lt;!-- O usando props --&gt;
    &lt;p&gt;ID del usuario (via props): &lbrace;&lbrace; id &rbrace;&rbrace;&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useRoute } from 'vue-router'

// Usando useRoute hook
const route = useRoute()
const userId = route.params.id

// O recibiendo como prop
defineProps({
  id: {
    type: String,
    required: true
  }
})
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Ejemplo de Ruta Dinámica</h3>
        <div class="p">
          <input v-model="userId" placeholder="ID de usuario" class="demo-input">
          <button @click="irAUsuario" class="demo-button">Ver Perfil</button>
          <p class="demo-text">Usuario actual: <strong>{{ usuarioActual }}</strong></p>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Navegación Programática</h2>

      <div class="code-block">
        <h3 class="code-title">Usando useRouter</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { useRouter } from 'vue-router'

const router = useRouter()

// Navegación básica
const irAInicio = () => {
  router.push('/')
}

// Navegación por nombre
const irAAcercaDe = () => {
  router.push({ name: 'About' })
}

// Navegación con parámetros
const irAUsuario = (id) => {
  router.push({ name: 'Usuario', params: { id } })
}

// Navegación con query
const buscar = (termino) => {
  router.push({ 
    path: '/buscar', 
    query: { q: termino } 
  })
}

// Reemplazar la entrada actual en el historial
const reemplazarRuta = () => {
  router.replace('/nueva-ruta')
}

// Navegación hacia atrás/adelante
const irAtras = () => {
  router.go(-1)
}

const irAdelante = () => {
  router.go(1)
}
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Ejemplo de Navegación</h3>
        <div class="p">
          <button @click="navegarAInicio" class="demo-button">Ir a Inicio</button>
          <button @click="navegarAAcercaDe" class="demo-button">Ir a Acerca De</button>
          <button @click="navegarAtras" class="demo-button">← Atrás</button>
          <button @click="navegarAdelante" class="demo-button">Adelante →</button>
          <p class="demo-text">Historial de navegación simulado</p>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Rutas Anidadas (Nested Routes)</h2>

      <div class="code-block">
        <h3 class="code-title">Configuración de Rutas Anidadas</h3>
        <pre class="code"><code>
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: DashboardHome
      },
      {
        path: 'profile',
        name: 'DashboardProfile',
        component: DashboardProfile
      },
      {
        path: 'settings',
        name: 'DashboardSettings',
        component: DashboardSettings
      }
    ]
  }
]
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Dashboard.vue - Layout Padre</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div class="dashboard"&gt;
    &lt;aside class="sidebar"&gt;
      &lt;h2&gt;Dashboard&lt;/h2&gt;
      &lt;nav&gt;
        &lt;router-link to="/dashboard"&gt;Inicio&lt;/router-link&gt;
        &lt;router-link to="/dashboard/profile"&gt;Perfil&lt;/router-link&gt;
        &lt;router-link to="/dashboard/settings"&gt;Configuración&lt;/router-link&gt;
      &lt;/nav&gt;
    &lt;/aside&gt;
    &lt;main class="content"&gt;
      &lt;router-view /&gt;
    &lt;/main&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Ejemplo de Dashboard</h3>
        <div class="dashboard-demo">
          <div class="sidebar-demo">
            <h4>Dashboard</h4>
            <button 
              @click="seccionActiva = 'inicio'" 
              :class="{ active: seccionActiva === 'inicio' }"
              class="nav-button"
            >
              Inicio
            </button>
            <button 
              @click="seccionActiva = 'perfil'" 
              :class="{ active: seccionActiva === 'perfil' }"
              class="nav-button"
            >
              Perfil
            </button>
            <button 
              @click="seccionActiva = 'configuracion'" 
              :class="{ active: seccionActiva === 'configuracion' }"
              class="nav-button"
            >
              Configuración
            </button>
          </div>
          <div class="content-demo">
            <div v-if="seccionActiva === 'inicio'">
              <h4>Bienvenido al Dashboard</h4>
              <p>Esta es la página de inicio del dashboard.</p>
            </div>
            <div v-if="seccionActiva === 'perfil'">
              <h4>Perfil de Usuario</h4>
              <p>Gestiona tu información personal aquí.</p>
            </div>
            <div v-if="seccionActiva === 'configuracion'">
              <h4>Configuración</h4>
              <p>Ajusta las preferencias de tu cuenta.</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Router Guards - Protección de Rutas</h2>

      <div class="code-block">
        <h3 class="code-title">Guards Globales</h3>
        <pre class="code"><code>
// router/index.js
router.beforeEach((to, from, next) => {
  // Verificar autenticación
  if (to.meta.requiresAuth && !store.state.usuario) {
    next('/login')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // Analytics tracking
  ga('send', 'pageview', to.path)
})
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Guards por Ruta</h3>
        <pre class="code"><code>
const routes = [
  {
    path: '/admin',
    component: Admin,
    meta: { requiresAuth: true, requiresAdmin: true },
    beforeEnter: (to, from, next) => {
      // Lógica específica para esta ruta
      if (!usuarioEsAdmin()) {
        next('/acceso-denegado')
      } else {
        next()
      }
    }
  }
]
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Guards en Componentes</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

// Guard antes de salir del componente
onBeforeRouteLeave((to, from, next) => {
  if (formularioModificado) {
    const confirmar = window.confirm(
      'Tienes cambios sin guardar. ¿Estás seguro de que quieres salir?'
    )
    if (confirmar) {
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})

// Guard cuando los parámetros de la ruta cambian
onBeforeRouteUpdate((to, from, next) => {
  // Recargar datos cuando el ID cambia
  cargarUsuario(to.params.id)
  next()
})
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Ejemplo de Guard de Navegación</h3>
        <div class="p">
          <p>¿Tienes cambios sin guardar? {{ formularioModificado ? 'Sí' : 'No' }}</p>
          <button @click="formularioModificado = !formularioModificado" class="demo-button">
            {{ formularioModificado ? 'Descartar Cambios' : 'Hacer Cambios' }}
          </button>
          <button @click="simularNavegacion" class="demo-button">Intentar Navegar</button>
          <p class="demo-text">{{ mensajeNavegacion }}</p>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Lazy Loading de Rutas</h2>

      <div class="code-block">
        <h3 class="code-title">Carga Diferida con Vue 3</h3>
        <pre class="code"><code>
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // Lazy loading con comentario webpackChunkName
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    // Agrupando rutas en el mismo chunk
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  }
]
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Composición con Composition API</h2>

      <div class="code-block">
        <h3 class="code-title">Composable useNavigation</h3>
        <pre class="code"><code>
// composables/useNavigation.js
import { useRouter, useRoute } from 'vue-router'

export function useNavigation() {
  const router = useRouter()
  const route = useRoute()

  const navigateTo = (path, params = {}) => {
    router.push({ path, params })
  }

  const navigateByName = (name, params = {}) => {
    router.push({ name, params })
  }

  const getCurrentParam = (paramName) => {
    return route.params[paramName]
  }

  const getQueryParam = (queryName) => {
    return route.query[queryName]
  }

  const isCurrentRoute = (routeName) => {
    return route.name === routeName
  }

  return {
    navigateTo,
    navigateByName,
    getCurrentParam,
    getQueryParam,
    isCurrentRoute,
    currentRoute: route,
    router
  }
}
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Uso en Componente</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { useNavigation } from '@/composables/useNavigation'

const {
  navigateTo,
  navigateByName,
  getCurrentParam,
  isCurrentRoute,
  currentRoute
} = useNavigation()

// Ejemplos de uso
const irAUsuario = (id) => {
  navigateByName('Usuario', { id })
}

const userId = getCurrentParam('id')
const esPaginaInicio = isCurrentRoute('Home')
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Mejores Prácticas</h2>
      <ul>
        <li class="p"><strong>Estructura consistente:</strong> Mantén una estructura clara de rutas</li>
        <li class="p"><strong>Lazy loading:</strong> Usa carga diferida para rutas no críticas</li>
        <li class="p"><strong>Validación de parámetros:</strong> Valida los params en beforeEnter</li>
        <li class="p"><strong>Meta campos:</strong> Usa meta fields para información adicional</li>
        <li class="p"><strong>Error handling:</strong> Implementa rutas para errores 404</li>
        <li class="p"><strong>Scroll behavior:</strong> Configura el comportamiento del scroll</li>
      </ul>

      <div class="code-block">
        <h3 class="code-title">Ruta 404 y Scroll Behavior</h3>
        <pre class="code"><code>
const routes = [
  // ... otras rutas
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Volver a la posición guardada o al top
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
        </code></pre>
      </div>

    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Ejemplos interactivos
const userId = ref('123')
const usuarioActual = ref('Usuario Demo')
const seccionActiva = ref('inicio')
const formularioModificado = ref(false)
const mensajeNavegacion = ref('')

// Simulación de router para ejemplos
const router = useRouter()

const irAUsuario = () => {
  if (userId.value) {
    usuarioActual.value = `Usuario ${userId.value}`
    mensajeNavegacion.value = `Navegando al perfil del usuario ${userId.value}`
  }
}

const navegarAInicio = () => {
  mensajeNavegacion.value = 'Navegando a la página de inicio'
}

const navegarAAcercaDe = () => {
  mensajeNavegacion.value = 'Navegando a la página Acerca De'
}

const navegarAtras = () => {
  mensajeNavegacion.value = 'Navegando hacia atrás en el historial'
}

const navegarAdelante = () => {
  mensajeNavegacion.value = 'Navegando hacia adelante en el historial'
}

const simularNavegacion = () => {
  if (formularioModificado.value) {
    const confirmar = confirm('Tienes cambios sin guardar. ¿Estás seguro de que quieres salir?')
    if (confirmar) {
      mensajeNavegacion.value = 'Navegación permitida - cambios descartados'
      formularioModificado.value = false
    } else {
      mensajeNavegacion.value = 'Navegación cancelada por el usuario'
    }
  } else {
    mensajeNavegacion.value = 'Navegación permitida - sin cambios pendientes'
  }
}

onMounted(() => {
  console.log('Componente Vue Router montado')
})
</script>

<style scoped>
.father {
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
  min-height: 100vh;
}
.content {
  width: 80%;
  max-width: 900px;
  padding-bottom: 2rem;
}
.title {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #1f2937;
}
.subtitle {
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #1f2937;
  margin-top: 2rem;
}
.subtitle-sm {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #1f2937;
  margin-top: 1.5rem;
}
.p {
  font-size: 1.125rem;
  font-weight: 400;
  color: #374151;
  line-height: 1.6;
}
strong {
  color: #42b883;
  font-weight: 600;
}
hr {
  border: 0;
  height: 1px;
  background-color: #e5e7eb;
  margin: 2rem 0;
}
.code {
  background-color: #1f2937;
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  overflow-x: auto;
}
.code-small {
  background-color: #1f2937;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
}
pre.code code {
  white-space: pre;
  color: #e5e7eb;
}
.code-block {
  margin-top: 2rem;
}
.code-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}
.example {
  background-color: #f3f4f6;
  border-left: 4px solid #42b883;
  padding: 1.5rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
}
.example-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-top: 0;
}

/* Estilos para ejemplos interactivos */
.demo-nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.router-link {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #374151;
  border-radius: 0.25rem;
  transition: all 0.2s;
}
.router-link:hover {
  background-color: #e5e7eb;
}
.router-link.active {
  background-color: #42b883;
  color: white;
}
.demo-text {
  font-size: 1rem;
  color: #374151;
  margin-top: 0.5rem;
}
.dashboard-demo {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}
.sidebar-demo {
  background-color: #f8f9fa;
  padding: 1rem;
}
.sidebar-demo h4 {
  margin-bottom: 1rem;
  color: #1f2937;
}
.nav-button {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: none;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  cursor: pointer;
  text-align: left;
}
.nav-button:hover {
  background-color: #e5e7eb;
}
.nav-button.active {
  background-color: #42b883;
  color: white;
  border-color: #42b883;
}
.content-demo {
  padding: 1rem;
}
.content-demo h4 {
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.demo-input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  width: 200px;
}
.demo-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.demo-button:hover {
  background-color: #359f72;
}

ul {
  list-style-type: disc;
  padding-left: 2rem;
}
li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .content {
    width: 95%;
  }
  .dashboard-demo {
    grid-template-columns: 1fr;
  }
  .demo-nav {
    flex-direction: column;
  }
}
</style>