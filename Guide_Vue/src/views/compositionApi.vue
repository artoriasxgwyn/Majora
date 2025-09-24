[file name]: compositionApi.vue
[file content begin]
<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Composition API</h1>
      <p class="p">
        La <strong>Composition API</strong> es una nueva forma de organizar la lógica en componentes Vue. Introducida en Vue 3, permite agrupar código por funcionalidad en lugar de por opciones, haciendo que los componentes complejos sean más fáciles de entender y mantener.
      </p>

      <hr />

      <h2 class="subtitle">¿Por qué Composition API?</h2>
      <p class="p">
        Mientras la Options API organiza el código por tipo (data, methods, computed), la Composition API permite agrupar toda la lógica relacionada en una misma sección. Esto es especialmente útil en componentes grandes donde la lógica relacionada puede estar dispersa en diferentes opciones.
      </p>

      <div class="example">
        <h3 class="example-title">Comparación Visual</h3>
        <div class="comparison">
          <div class="approach">
            <h4>Options API</h4>
            <p class="p">Lógica dispersa por tipo</p>
            <pre class="code-small"><code>
data() {
  return {
    usuarios: [],
    filtro: '',
    cargando: false
  }
},
computed: {
  usuariosFiltrados() {
    // Filtrado aquí
  }
},
methods: {
  cargarUsuarios() {
    // Carga aquí
  }
},
mounted() {
  // Inicialización aquí
}
            </code></pre>
          </div>
          <div class="approach">
            <h4>Composition API</h4>
            <p class="p">Lógica agrupada por funcionalidad</p>
            <pre class="code-small"><code>
// Funcionalidad de usuarios
const { usuarios, usuariosFiltrados, cargarUsuarios } = useUsuarios()

// Funcionalidad de búsqueda
const { filtro, buscar } = useBusqueda()

// Funcionalidad de estado
const { cargando, iniciarCarga } = useEstado()
            </code></pre>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">setup() Function</h2>
      <p class="p">
        El corazón de la Composition API es la función <code>setup()</code>. Esta función se ejecuta antes de que el componente sea creado y es donde declaramos toda la reactividad y lógica del componente.
      </p>

      <div class="code-block">
        <h3 class="code-title">Estructura Básica</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;&lbrace;&lbrace; titulo &rbrace;&rbrace;&lt;/h1&gt;
    &lt;p&gt;Contador: &lbrace;&lbrace; contador &rbrace;&rbrace;&lt;/p&gt;
    &lt;button @click="incrementar"&gt;Incrementar&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from 'vue'

export default {
  setup() {
    // Variables reactivas
    const titulo = ref('Mi Componente')
    const contador = ref(0)

    // Funciones
    const incrementar = () => {
      contador.value++
    }

    // Retornar lo que estará disponible en el template
    return {
      titulo,
      contador,
      incrementar
    }
  }
}
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Reactividad Fundamental</h2>

      <h3 class="subtitle-sm">ref()</h3>
      <p class="p">
        <code>ref()</code> crea una referencia reactiva para valores primitivos. Para acceder al valor, usamos <code>.value</code>.
      </p>

      <div class="example">
        <h3 class="example-title">Ejemplo Interactivo con ref()</h3>
        <div class="p">
          <input v-model="nombre" placeholder="Escribe tu nombre" class="demo-input">
          <p>Hola, <strong>{{ nombre }}</strong>!</p>
          <p>Contador: <strong>{{ contador }}</strong></p>
          <button @click="incrementar" class="demo-button">Incrementar</button>
        </div>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código ref()</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { ref } from 'vue'

// Variables reactivas con ref
const nombre = ref('')
const contador = ref(0)

// Función para modificar el contador
const incrementar = () => {
  contador.value++
}
&lt;/script&gt;
        </code></pre>
      </div>

      <h3 class="subtitle-sm">reactive()</h3>
      <p class="p">
        <code>reactive()</code> crea un objeto reactivo. Ideal para objetos y arrays, no requiere <code>.value</code> para acceder a las propiedades.
      </p>

      <div class="example">
        <h3 class="example-title">Ejemplo Interactivo con reactive()</h3>
        <div class="p">
          <input v-model="usuario.nombre" placeholder="Nombre" class="demo-input">
          <input v-model="usuario.edad" type="number" placeholder="Edad" class="demo-input">
          <p>Usuario: <strong>{{ usuario.nombre }}</strong>, Edad: <strong>{{ usuario.edad }}</strong></p>
        </div>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código reactive()</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { reactive } from 'vue'

// Objeto reactivo
const usuario = reactive({
  nombre: '',
  edad: 0
})
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Computed Properties</h2>
      <p class="p">
        Las propiedades computadas se crean con <code>computed()</code>. Se actualizan automáticamente cuando sus dependencias cambian.
      </p>

      <div class="example">
        <h3 class="example-title">Ejemplo Computed</h3>
        <div class="p">
          <input v-model="precio" type="number" placeholder="Precio" class="demo-input">
          <input v-model="cantidad" type="number" placeholder="Cantidad" class="demo-input">
          <p>Precio unitario: $<strong>{{ precio }}</strong></p>
          <p>Cantidad: <strong>{{ cantidad }}</strong></p>
          <p>Total: $<strong>{{ total }}</strong></p>
        </div>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código computed()</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { ref, computed } from 'vue'

const precio = ref(0)
const cantidad = ref(0)

// Propiedad computada
const total = computed(() => {
  return precio.value * cantidad.value
})
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Watchers</h2>
      <p class="p">
        Los watchers observan cambios en las variables reactivas y ejecutan código cuando cambian.
      </p>

      <div class="example">
        <h3 class="example-title">Ejemplo Watch</h3>
        <div class="p">
          <input v-model="busqueda" placeholder="Buscar..." class="demo-input">
          <p v-if="cargando">Buscando... ⏳</p>
          <p v-else>Resultados para: <strong>"{{ busqueda }}"</strong></p>
        </div>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código watch()</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { ref, watch } from 'vue'

const busqueda = ref('')
const cargando = ref(false)

// Watcher
watch(busqueda, (nuevoValor) => {
  if (nuevoValor) {
    cargando.value = true
    // Simular búsqueda asíncrona
    setTimeout(() => {
      cargando.value = false
    }, 500)
  }
})
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Lifecycle Hooks</h2>
      <p class="p">
        Los hooks del ciclo de vida se importan y usan directamente en setup.
      </p>

      <div class="code-block">
        <h3 class="code-title">Hooks Disponibles</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Componente montado')
  // Cargar datos iniciales
})

onUpdated(() => {
  console.log('Componente actualizado')
})

onUnmounted(() => {
  console.log('Componente desmontado')
  // Limpiar recursos
})
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">&lt;script setup&gt; Syntax Sugar</h2>
      <p class="p">
        Vue 3.2 introdujo <code>&lt;script setup&gt;</code>, una sintaxis más concisa que elimina la necesidad de usar <code>setup()</code> y <code>return</code>.
      </p>

      <div class="example">
        <h3 class="example-title">Ejemplo Completo con &lt;script setup&gt;</h3>
        <div class="p">
          <input v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="Nueva tarea" class="demo-input">
          <button @click="agregarTarea" class="demo-button">Agregar</button>
          
          <ul class="tareas-lista">
            <li v-for="(tarea, index) in tareasFiltradas" :key="tarea.id" class="tarea-item">
              <input type="checkbox" v-model="tarea.completada">
              <span :class="{ completada: tarea.completada }">{{ tarea.texto }}</span>
              <button @click="eliminarTarea(index)" class="demo-button small">Eliminar</button>
            </li>
          </ul>
          
          <div class="filtros">
            <button @click="filtro = 'todas'" class="demo-button small">Todas ({{ totalTareas }})</button>
            <button @click="filtro = 'pendientes'" class="demo-button small">Pendientes ({{ tareasPendientes }})</button>
            <button @click="filtro = 'completadas'" class="demo-button small">Completadas ({{ tareasCompletadas }})</button>
          </div>
        </div>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código Completo</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;input v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="Nueva tarea"&gt;
    &lt;button @click="agregarTarea"&gt;Agregar&lt;/button&gt;
    
    &lt;ul&gt;
      &lt;li v-for="(tarea, index) in tareasFiltradas" :key="tarea.id"&gt;
        &lt;input type="checkbox" v-model="tarea.completada"&gt;
        &lt;span :class="{ completada: tarea.completada }"&gt;&lbrace;&lbrace; tarea.texto &rbrace;&rbrace;&lt;/span&gt;
        &lt;button @click="eliminarTarea(index)"&gt;Eliminar&lt;/button&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    
    &lt;div&gt;
      &lt;button @click="filtro = 'todas'"&gt;Todas (&lbrace;&lbrace; totalTareas &rbrace;&rbrace;)&lt;/button&gt;
      &lt;button @click="filtro = 'pendientes'"&gt;Pendientes (&lbrace;&lbrace; tareasPendientes &rbrace;&rbrace;)&lt;/button&gt;
      &lt;button @click="filtro = 'completadas'"&gt;Completadas (&lbrace;&lbrace; tareasCompletadas &rbrace;&rbrace;)&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed, onMounted } from 'vue'

// Estado reactivo
const nuevaTarea = ref('')
const tareas = ref([])
const filtro = ref('todas')

// Propiedades computadas
const tareasFiltradas = computed(() => {
  switch(filtro.value) {
    case 'pendientes': return tareas.value.filter(t => !t.completada)
    case 'completadas': return tareas.value.filter(t => t.completada)
    default: return tareas.value
  }
})

const totalTareas = computed(() => tareas.value.length)
const tareasPendientes = computed(() => tareas.value.filter(t => !t.completada).length)
const tareasCompletadas = computed(() => tareas.value.filter(t => t.completada).length)

// Métodos
const agregarTarea = () => {
  if (nuevaTarea.value.trim()) {
    tareas.value.push({
      id: Date.now(),
      texto: nuevaTarea.value.trim(),
      completada: false
    })
    nuevaTarea.value = ''
  }
}

const eliminarTarea = (index) => {
  tareas.value.splice(index, 1)
}

// Lifecycle hook
onMounted(() => {
  console.log('Componente de tareas montado')
})
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Composables - Reutilización de Lógica</h2>
      <p class="p">
        Los composables son funciones que encapsulan lógica reusable. Es el equivalente a los mixins de Vue 2 pero más poderosos y type-safe.
      </p>

      <div class="code-block">
        <h3 class="code-title">Ejemplo de Composable</h3>
        <pre class="code"><code>
// composables/useCounter.js
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  return {
    count,
    increment,
    decrement,
    reset
  }
}

// En tu componente
&lt;script setup&gt;
import { useCounter } from '@/composables/useCounter'

const { count, increment, decrement } = useCounter(10)
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Ventajas de Composition API</h2>
      <ul>
        <li class="p"><strong>Mejor organización:</strong> Lógica relacionada agrupada</li>
        <li class="p"><strong>Reutilización:</strong> Composables para lógica reusable</li>
        <li class="p"><strong>TypeScript:</strong> Mejor soporte para TypeScript</li>
        <li class="p"><strong>Flexibilidad:</strong> Más control sobre la reactividad</li>
        <li class="p"><strong>Mantenimiento:</strong> Más fácil de mantener en componentes grandes</li>
      </ul>

    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'

// Ejemplos interactivos
const nombre = ref('')
const contador = ref(0)
const usuario = reactive({
  nombre: '',
  edad: 0
})
const precio = ref(0)
const cantidad = ref(0)
const busqueda = ref('')
const cargando = ref(false)
const nuevaTarea = ref('')
const tareas = ref([
  { id: 1, texto: 'Aprender Composition API', completada: true },
  { id: 2, texto: 'Practicar con ejemplos', completada: false },
  { id: 3, texto: 'Crear composables', completada: false }
])
const filtro = ref('todas')

// Computed properties
const total = computed(() => precio.value * cantidad.value)
const tareasFiltradas = computed(() => {
  switch(filtro.value) {
    case 'pendientes': return tareas.value.filter(t => !t.completada)
    case 'completadas': return tareas.value.filter(t => t.completada)
    default: return tareas.value
  }
})
const totalTareas = computed(() => tareas.value.length)
const tareasPendientes = computed(() => tareas.value.filter(t => !t.completada).length)
const tareasCompletadas = computed(() => tareas.value.filter(t => t.completada).length)

// Methods
const incrementar = () => {
  contador.value++
}

const agregarTarea = () => {
  if (nuevaTarea.value.trim()) {
    tareas.value.push({
      id: Date.now(),
      texto: nuevaTarea.value.trim(),
      completada: false
    })
    nuevaTarea.value = ''
  }
}

const eliminarTarea = (index) => {
  tareas.value.splice(index, 1)
}

// Watchers
watch(busqueda, (nuevoValor) => {
  if (nuevoValor) {
    cargando.value = true
    setTimeout(() => {
      cargando.value = false
    }, 500)
  }
})

// Lifecycle hooks
onMounted(() => {
  console.log('Componente Composition API montado')
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
.demo-button.small {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
.tareas-lista {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}
.tarea-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}
.tarea-item input[type="checkbox"] {
  margin-right: 0.5rem;
}
.completada {
  text-decoration: line-through;
  color: #6b7280;
}
.filtros {
  margin-top: 1rem;
}
ul {
  list-style-type: disc;
  padding-left: 2rem;
}
li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .comparison {
    grid-template-columns: 1fr;
  }
  .content {
    width: 95%;
  }
}
</style>
[file content end]