<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Pinia Plugin Persist</h1>
      <p class="p">
        <strong>Pinia Plugin Persist</strong> es un plugin oficial que permite persistir el estado de tus stores en localStorage, sessionStorage u otros almacenamientos, manteniendo los datos entre sesiones del navegador.
      </p>

      <hr />

      <h2 class="subtitle">¿Por qué usar persistencia?</h2>
      <p class="p">
        La persistencia de estado es crucial para mantener la experiencia del usuario. Permite que la aplicación recuerde preferencias, carritos de compra, datos de formularios y más, incluso después de recargar la página.
      </p>

      <div class="example">
        <h3 class="example-title">Casos de uso comunes</h3>
        <ul>
          <li class="p"><strong>Preferencias de usuario:</strong> Tema, idioma, configuraciones</li>
          <li class="p"><strong>Carritos de compra:</strong> Items seleccionados por el usuario</li>
          <li class="p"><strong>Datos de autenticación:</strong> Tokens e información de sesión</li>
          <li class="p"><strong>Formularios:</strong> Datos parcialmente completados</li>
        </ul>
      </div>

      <hr />

      <h2 class="subtitle">Instalación</h2>

      <div class="code-block">
        <h3 class="code-title">Instalación del plugin</h3>
        <pre class="code"><code>
npm install pinia-plugin-persistedstate

// o usando yarn
yarn add pinia-plugin-persistedstate

// o usando pnpm
pnpm add pinia-plugin-persistedstate
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Configuración en main.js</h3>
        <pre class="code"><code>
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const pinia = createPinia()

// Usar el plugin
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.mount('#app')
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Uso Básico</h2>

      <div class="code-block">
        <h3 class="code-title">Persistencia Simple</h3>
        <pre class="code"><code>
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () =&gt; ({
    count: 0,
    name: 'Mi Contador'
  }),

  // Persistencia simple - todo el estado
  persist: true
})
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Persistencia con Configuración</h3>
        <pre class="code"><code>
export const useUserStore = defineStore('user', {
  state: () =&gt; ({
    user: null,
    preferences: {
      theme: 'light',
      language: 'es'
    },
    temporaryData: null
  }),

  persist: {
    key: 'user-storage',
    storage: localStorage,
    paths: ['user', 'preferences.theme']
  }
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Opciones de Configuración</h2>

      <div class="code-block">
        <h3 class="code-title">Todas las opciones disponibles</h3>
        <pre class="code"><code>
persist: {
  // Clave personalizada en el storage
  key: 'custom-key',
  
  // Tipo de almacenamiento
  storage: localStorage, // o sessionStorage
  
  // Rutas específicas a persistir
  paths: ['user', 'preferences.theme'],
  
  // Hook antes de restaurar
  beforeRestore: (context) =&gt; {
    console.log('Antes de restaurar:', context)
  },
  
  // Hook después de restaurar
  afterRestore: (context) =&gt; {
    console.log('Después de restaurar:', context)
  }
}
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Persistencia Selectiva</h2>

      <div class="code-block">
        <h3 class="code-title">Persistir solo ciertas propiedades</h3>
        <pre class="code"><code>
export const useAuthStore = defineStore('auth', {
  state: () =&gt; ({
    user: null,
    token: null,
    isLoading: false,    // No persistir
    error: null         // No persistir
  }),

  persist: {
    // Solo persistir usuario y token
    paths: ['user', 'token']
  }
})
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Persistir propiedades anidadas</h3>
        <pre class="code"><code>
export const useAppStore = defineStore('app', {
  state: () =&gt; ({
    ui: {
      sidebar: {
        collapsed: false,
        width: 250
      },
      theme: 'dark'
    },
    userData: {
      profile: {
        name: '',
        email: ''
      }
    }
  }),

  persist: {
    paths: [
      'ui.sidebar.collapsed',
      'ui.theme',
      'userData.profile'
    ]
  }
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Diferentes Tipos de Almacenamiento</h2>

      <div class="code-block">
        <h3 class="code-title">Usando sessionStorage</h3>
        <pre class="code"><code>
export const useSessionStore = defineStore('session', {
  state: () =&gt; ({
    cart: [],
    recentSearches: [],
    currentFormData: null
  }),

  persist: {
    // sessionStorage se limpia al cerrar la pestaña
    storage: sessionStorage,
    paths: ['cart', 'recentSearches']
  }
})
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Almacenamiento personalizado</h3>
        <pre class="code"><code>
// Almacenamiento personalizado
const customStorage = {
  getItem: (key) =&gt; {
    return Promise.resolve(localStorage.getItem(key))
  },
  setItem: (key, value) =&gt; {
    return Promise.resolve(localStorage.setItem(key, value))
  }
}

export const useCustomStore = defineStore('custom', {
  state: () =&gt; ({ data: null }),
  
  persist: {
    storage: customStorage
  }
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Hooks y Eventos</h2>

      <div class="code-block">
        <h3 class="code-title">Hooks de ciclo de vida</h3>
        <pre class="code"><code>
export const useSecureStore = defineStore('secure', {
  state: () =&gt; ({
    userData: null,
    lastUpdated: null
  }),

  persist: {
    paths: ['userData'],
    
    beforeRestore: (ctx) =&gt; {
      console.log('Estado actual:', ctx.store.$state)
    },
    
    afterRestore: (ctx) =&gt; {
      console.log('Estado restaurado:', ctx.store.$state)
      // Validaciones o transformaciones aquí
    }
  }
})
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Ejemplo con validación</h3>
        <pre class="code"><code>
export const useAuthStore = defineStore('auth', {
  state: () =&gt; ({
    user: null,
    token: null,
    expiresAt: null
  }),

  persist: {
    paths: ['user', 'token', 'expiresAt'],
    
    afterRestore: (ctx) =&gt; {
      // Validar que el token no haya expirado
      const { store } = ctx
      if (store.expiresAt &amp;&amp; new Date(store.expiresAt) &lt; new Date()) {
        console.log('Token expirado, limpiando estado')
        store.$patch({
          user: null,
          token: null,
          expiresAt: null
        })
      }
    }
  }
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Ejemplo Completo - Store de Usuario</h2>

      <div class="code-block">
        <h3 class="code-title">stores/user.js</h3>
        <pre class="code"><code>
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () =&gt; ({
    // Información de usuario
    profile: {
      id: null,
      name: '',
      email: '',
      avatar: ''
    },
    
    // Preferencias
    preferences: {
      theme: 'light',
      language: 'es',
      notifications: true
    },
    
    // Datos de sesión
    session: {
      lastLogin: null,
      loginCount: 0
    },
    
    // Estado temporal (no persistir)
    isLoading: false,
    error: null
  }),

  getters: {
    isLoggedIn: (state) =&gt; state.profile.id !== null
  },

  actions: {
    async login(credentials) {
      this.isLoading = true
      try {
        // Simular login
        this.profile = {
          id: 1,
          name: 'Juan Pérez',
          email: credentials.email
        }
        this.session.lastLogin = new Date().toISOString()
        this.session.loginCount += 1
      } finally {
        this.isLoading = false
      }
    }
  },

  // Persistir todo excepto estado temporal
  persist: {
    key: 'user-data',
    paths: ['profile', 'preferences', 'session']
  }
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Múltiples Stores</h2>

      <div class="code-block">
        <h3 class="code-title">Comunicación entre Stores</h3>
        <pre class="code"><code>
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', () =&gt; {
  const userStore = useUserStore()
  const items = ref([])

  function addItem(product) {
    if (!userStore.isLoggedIn) {
      throw new Error('Debe iniciar sesión')
    }
    items.value.push(product)
  }

  return {
    items,
    addItem
  }
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Migración y Versionado</h2>

      <div class="code-block">
        <h3 class="code-title">Manejo de versiones</h3>
        <pre class="code"><code>
export const useVersionedStore = defineStore('versioned', {
  state: () =&gt; ({
    data: null,
    // Versión del esquema
    _version: 2
  }),

  persist: {
    key: 'myapp-store-v2',
    
    beforeRestore: (ctx) =&gt; {
      const stored = localStorage.getItem('myapp-store-v2')
      if (stored) {
        const parsed = JSON.parse(stored)
        // Migrar de v1 a v2
        if (parsed._version === 1) {
          parsed.data = migrateV1ToV2(parsed.data)
          parsed._version = 2
        }
      }
    }
  }
})

function migrateV1ToV2(v1Data) {
  // Transformar datos de v1 a v2
  return {
    ...v1Data,
    newField: 'default-value'
  }
}
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Plugin Personalizado</h2>

      <div class="code-block">
        <h3 class="code-title">Creando tu propio plugin</h3>
        <pre class="code"><code>
// plugins/custom-persistence.js
export const customPersistencePlugin = ({ store, options }) =&gt; {
  if (!options.persist) return
  
  const key = `persist-${store.$id}`
  
  // Cargar estado guardado
  const stored = localStorage.getItem(key)
  if (stored) {
    try {
      store.$patch(JSON.parse(stored))
    } catch (error) {
      console.warn('Error restoring state:', error)
    }
  }
  
  // Suscribirse a cambios
  store.$subscribe((mutation, state) =&gt; {
    localStorage.setItem(key, JSON.stringify(state))
  })
}

// En main.js
import { customPersistencePlugin } from './plugins/custom-persistence'
pinia.use(customPersistencePlugin)
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Best Practices</h2>
      <ul>
        <li class="p"><strong>No persistir datos sensibles:</strong> Tokens sí, contraseñas no</li>
        <li class="p"><strong>Usar paths selectivos:</strong> Solo persistir lo necesario</li>
        <li class="p"><strong>Considerar el tamaño:</strong> localStorage tiene límite de ~5MB</li>
        <li class="p"><strong>Manejar versiones:</strong> Para cambios en la estructura del estado</li>
        <li class="p"><strong>Validar datos:</strong> Usar beforeRestore para validación</li>
        <li class="p"><strong>Testing:</strong> Probar la persistencia en diferentes escenarios</li>
      </ul>

      <div class="code-block">
        <h3 class="code-title">Estructura Recomendada</h3>
        <pre class="code"><code>
src/
├── stores/
│   ├── index.js
│   ├── auth.js          // Persiste usuario/token
│   ├── user.js          // Persiste preferencias
│   ├── cart.js          // Persiste en sessionStorage
│   └── ui.js            // No persiste
├── plugins/
│   └── persistence.js   // Configuración global
└── main.js
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Solución de Problemas</h2>

      <div class="code-block">
        <h3 class="code-title">Estado no se persiste</h3>
        <pre class="code"><code>
// Verificar que el plugin esté instalado
pinia.use(piniaPluginPersistedstate)

// Verificar la configuración del store
persist: true  // o con configuración

// Verificar paths
persist: {
  paths: ['data'] // Rutas correctas
}
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Datos corruptos</h3>
        <pre class="code"><code>
persist: {
  beforeRestore: (ctx) =&gt; {
    const stored = localStorage.getItem(`pinia-${ctx.store.$id}`)
    if (stored) {
      try {
        JSON.parse(stored) // Validar JSON
      } catch {
        // Limpiar si está corrupto
        localStorage.removeItem(`pinia-${ctx.store.$id}`)
      }
    }
  }
}
        </code></pre>
      </div>

    </section>
  </div>
</template>

<script setup>
// Este componente es solo para documentación
// No necesita lógica para los ejemplos de código
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
.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}
.approach {
  padding: 1rem;
}
.approach h4 {
  color: #42b883;
  margin-bottom: 0.5rem;
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
  .comparison {
    grid-template-columns: 1fr;
  }
}
</style>