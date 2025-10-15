<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Pinia</h1>
      <p class="p">
        <strong>Pinia</strong> es la librería oficial de gestión de estado para Vue.js. Es el reemplazo moderno de Vuex, diseñado específicamente para aprovechar al máximo la Composition API de Vue 3.
      </p>

      <hr />

      <h2 class="subtitle">¿Por qué Pinia?</h2>
      <p class="p">
        Pinia simplifica la gestión de estado eliminando conceptos complejos como mutations y proporcionando una API más directa y type-safe.
      </p>

      <div class="example">
        <h3 class="example-title">Ventajas sobre Vuex</h3>
        <div class="comparison">
          <div class="approach">
            <h4>Vuex</h4>
            <ul>
              <li class="p">Mutations, Actions, Getters</li>
              <li class="p">Estructura más compleja</li>
              <li class="p">Single store global</li>
            </ul>
          </div>
          <div class="approach">
            <h4>Pinia</h4>
            <ul>
              <li class="p">Solo Actions y Getters</li>
              <li class="p">API más simple e intuitiva</li>
              <li class="p">Múltiples stores modulares</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Instalación</h2>

      <div class="code-block">
        <h3 class="code-title">Comandos de instalación</h3>
        <pre class="code"><code>
npm install pinia

// o usando yarn
yarn add pinia

// o usando pnpm
pnpm add pinia
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Configuración en main.js</h3>
        <pre class="code"><code>
import { createApp } from &apos;vue&apos;
import { createPinia } from &apos;pinia&apos;
import App from &apos;./App.vue&apos;

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount(&apos;#app&apos;)
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Definiendo un Store</h2>

      <div class="code-block">
        <h3 class="code-title">Store Básico - Options Style</h3>
        <pre class="code"><code>
import { defineStore } from &apos;pinia&apos;

export const useCounterStore = defineStore(&apos;counter&apos;, {
  state: () =&gt; ({
    count: 0,
    name: &apos;Mi Contador&apos;
  }),

  getters: {
    doubleCount: (state) =&gt; state.count * 2
  },

  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Store - Composition API Style</h3>
        <pre class="code"><code>
import { defineStore } from &apos;pinia&apos;
import { ref, computed } from &apos;vue&apos;

export const useCounterStore = defineStore(&apos;counter&apos;, () =&gt; {
  const count = ref(0)
  const name = ref(&apos;Mi Contador&apos;)

  const doubleCount = computed(() =&gt; count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  return {
    count,
    name,
    doubleCount,
    increment,
    decrement
  }
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Usando Stores en Componentes</h2>

      <div class="code-block">
        <h3 class="code-title">Acceso Básico</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { useCounterStore } from &apos;@/stores/counter&apos;

const counterStore = useCounterStore()
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Contador: &lbrace;&lbrace; counterStore.count &rbrace;&rbrace;&lt;/p&gt;
    &lt;p&gt;Doble: &lbrace;&lbrace; counterStore.doubleCount &rbrace;&rbrace;&lt;/p&gt;
    &lt;button @click=&quot;counterStore.increment&quot;&gt;+&lt;/button&gt;
    &amp;lt;button @click=&quot;counterStore.decrement&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Destructuring Reactivo</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { useCounterStore } from &apos;@/stores/counter&apos;
import { storeToRefs } from &apos;pinia&apos;

const counterStore = useCounterStore()

// ✅ CORRECTO - Mantiene reactividad
const { count, doubleCount } = storeToRefs(counterStore)
const { increment, decrement } = counterStore

// ❌ INCORRECTO - Pierde reactividad
// const { count, doubleCount } = counterStore
&amp;lt;/script&amp;gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Store de Usuario - Ejemplo Real</h2>

      <div class="code-block">
        <h3 class="code-title">stores/user.js</h3>
        <pre class="code"><code>
import { defineStore } from &apos;pinia&apos;
import { ref, computed } from &apos;vue&apos;

export const useUserStore = defineStore(&apos;user&apos;, () =&gt; {
  const user = ref(null)
  const isLoading = ref(false)

  const isLoggedIn = computed(() =&gt; user.value !== null)
  const userName = computed(() =&gt; user.value?.name || &apos;Invitado&apos;)

  async function login(credentials) {
    isLoading.value = true
    try {
      // Simular API call
      await new Promise(resolve =&gt; setTimeout(resolve, 1000))
      user.value = {
        id: 1,
        name: &apos;Juan Pérez&apos;,
        email: credentials.email
      }
    } finally {
      isLoading.value = false
    }
  }

  function logout() {
    user.value = null
  }

  return {
    user,
    isLoading,
    isLoggedIn,
    userName,
    login,
    logout
  }
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Múltiples Stores</h2>

      <div class="code-block">
        <h3 class="code-title">Comunicación entre Stores</h3>
        <pre class="code"><code>
import { defineStore } from &apos;pinia&apos;
import { useUserStore } from &apos;./user&apos;

export const useCartStore = defineStore(&apos;cart&apos;, () =&gt; {
  const userStore = useUserStore()
  const items = ref([])

  function addItem(product) {
    if (!userStore.isLoggedIn) {
      throw new Error(&apos;Debe iniciar sesión&apos;)
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

      <h2 class="subtitle">Persistencia de Estado</h2>

      <div class="code-block">
        <h3 class="code-title">Con pinia-plugin-persistedstate</h3>
        <pre class="code"><code>
npm install pinia-plugin-persistedstate

// main.js
import piniaPluginPersistedstate from &apos;pinia-plugin-persistedstate&apos;

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// En el store
export const useUserStore = defineStore(&apos;user&apos;, {
  state: () =&gt; ({ user: null }),
  
  persist: true,
  
  // o con configuración
  persist: {
    key: &apos;user-storage&apos;,
    paths: [&apos;user&apos;]
  }
})
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Plugin Personalizado</h3>
        <pre class="code"><code>
const persistencePlugin = ({ store }) =&gt; {
  // Cargar del localStorage
  const stored = localStorage.getItem(`pinia-${store.$id}`)
  if (stored) {
    store.$patch(JSON.parse(stored))
  }

  // Guardar cambios
  store.$subscribe((mutation, state) =&gt; {
    localStorage.setItem(`pinia-${store.$id}`, JSON.stringify(state))
  })
}

pinia.use(persistencePlugin)
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Actions Asíncronas</h2>

      <div class="code-block">
        <h3 class="code-title">Ejemplo con Async/Await</h3>
        <pre class="code"><code>
export const useProductsStore = defineStore(&apos;products&apos;, () =&gt; {
  const products = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  async function fetchProducts() {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await fetch(&apos;/api/products&apos;)
      products.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  return {
    products,
    isLoading,
    error,
    fetchProducts
  }
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Getters Computados</h2>

      <div class="code-block">
        <h3 class="code-title">Getters con Parámetros</h3>
        <pre class="code"><code>
export const useProductsStore = defineStore(&apos;products&apos;, {
  state: () =&gt; ({
    products: [],
    filter: &apos;&apos;
  }),

  getters: {
    // Getter sin parámetros
    availableProducts: (state) =&gt; 
      state.products.filter(p =&gt; p.stock &gt; 0),

    // Getter con parámetros (retornando función)
    productsByCategory: (state) =&gt; {
      return (category) =&gt; 
        state.products.filter(p =&gt; p.category === category)
    },

    // Getter que usa otro getter
    availableProductsCount() {
      return this.availableProducts.length
    }
  }
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Soporte para TypeScript</h2>

      <div class="code-block">
        <h3 class="code-title">Store Tipado</h3>
        <pre class="code"><code>
interface User {
  id: number
  name: string
  email: string
}

interface UserState {
  user: User | null
  isLoading: boolean
}

export const useUserStore = defineStore(&apos;user&apos;, {
  state: (): UserState =&gt; ({
    user: null,
    isLoading: false
  }),

  getters: {
    isLoggedIn: (state): boolean =&gt; state.user !== null,
    userName: (state): string =&gt; state.user?.name || &apos;Invitado&apos;
  },

  actions: {
    async login(email: string, password: string): Promise&amp;lt;void&amp;gt; {
      this.isLoading = true
      // Lógica de login...
    }
  }
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Reset y Subscribe</h2>

      <div class="code-block">
        <h3 class="code-title">Métodos Útiles</h3>
        <pre class="code"><code>
const userStore = useUserStore()

// Resetear al estado inicial
userStore.$reset()

// Suscribirse a cambios
userStore.$subscribe((mutation, state) =&gt; {
  console.log(&apos;Store cambió:&apos;, mutation.type, state)
})

// Suscribirse a actions
userStore.$onAction(({ name, store, args, after, onError }) =&gt; {
  console.log(`Action ${name} ejecutada`)

  after((result) =&gt; {
    console.log(`Action ${name} completada`)
  })

  onError((error) =&gt; {
    console.error(`Action ${name} falló:`, error)
  })
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Testing de Stores</h2>

      <div class="code-block">
        <h3 class="code-title">Tests con Vitest</h3>
        <pre class="code"><code>
import { setActivePinia, createPinia } from &apos;pinia&apos;
import { useCounterStore } from &apos;./counter&apos;

describe(&apos;Counter Store&apos;, () =&gt; {
  beforeEach(() =&gt; {
    setActivePinia(createPinia())
  })

  it(&apos;increments count&apos;, () =&gt; {
    const counter = useCounterStore()
    expect(counter.count).toBe(0)
    
    counter.increment()
    expect(counter.count).toBe(1)
  })

  it(&apos;calculates double count&apos;, () =&gt; {
    const counter = useCounterStore()
    counter.count = 5
    
    expect(counter.doubleCount).toBe(10)
  })
})
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Mejores Prácticas</h2>
      <ul>
        <li class="p"><strong>Nombres semánticos:</strong> Usa nombres descriptivos para stores</li>
        <li class="p"><strong>Stores modulares:</strong> Divide la lógica en stores específicos</li>
        <li class="p"><strong>Composition API:</strong> Prefiere setup stores para TypeScript</li>
        <li class="p"><strong>storeToRefs:</strong> Siempre úsalo para destructuring</li>
        <li class="p"><strong>Actions async:</strong> Maneja estados de loading y error</li>
        <li class="p"><strong>Nomenclatura:</strong> Usa "use" prefix para stores (useUserStore)</li>
      </ul>

      <div class="code-block">
        <h3 class="code-title">Estructura Recomendada</h3>
        <pre class="code"><code>
src/
├── stores/
│   ├── index.js          // Exportación centralizada
│   ├── auth.js          // Autenticación
│   ├── user.js          // Datos de usuario
│   ├── cart.js          // Carrito de compras
│   ├── products.js      // Productos
│   └── ui.js           // Estado de UI
└── components/
    └── ...
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