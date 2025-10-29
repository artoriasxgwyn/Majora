<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Importación de Componentes en Vue.js</h1>
      <p class="p">
        Aprender a <strong>importar componentes</strong> correctamente es esencial para construir aplicaciones Vue.js modulares y mantenibles. Esta guía te mostrará los diferentes métodos de importación y cuándo usar cada uno.
      </p>

      <hr />

      <h2 class="subtitle">Métodos de Importación</h2>

      <h3 class="subtitle-sm">1. Importación Básica (Estática)</h3>
      <p class="p">
        La forma más común de importar componentes. El componente se carga inmediatamente con la aplicación.
      </p>

      <div class="code-block">
        <h3 class="code-title">Composition API con &lt;script setup&gt;</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- Usar el componente importado --&gt;
    &lt;MiBoton @click="manejarClick"&gt;
      Hacer clic
    &lt;/MiBoton&gt;
    &lt;MiTarjeta titulo="Ejemplo" contenido="Contenido de prueba" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Importar componentes
import MiBoton from '@/components/MiBoton.vue'
import MiTarjeta from '@/components/MiTarjeta.vue'

const manejarClick = () => {
  console.log('Botón clickeado')
}
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;MiBoton @click="manejarClick"&gt;
      Hacer clic
    &lt;/MiBoton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import MiBoton from '@/components/MiBoton.vue'

export default {
  // Registrar componentes
  components: {
    MiBoton
  },
  methods: {
    manejarClick() {
      console.log('Botón clickeado')
    }
  }
}
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: Componentes Básicos</h3>
        <div class="component-demo">
          <BotonEjemplo @click="contadorBasico++">
            Clics: {{ contadorBasico }}
          </BotonEjemplo>
          <TarjetaEjemplo
            titulo="Tarjeta de Ejemplo"
            :contenido="`Este componente fue importado estáticamente. Clics: ${contadorBasico}`"
          />
        </div>
      </div>

      <h3 class="subtitle-sm">2. Importación con Alias</h3>
      <p class="p">
        Usa alias para evitar rutas relativas complejas como <code>../../../components</code>.
      </p>

      <div class="code-block">
        <h3 class="code-title">vite.config.js</h3>
        <pre class="code"><code>
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url))
    }
  }
})
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Uso con alias</h3>
        <pre class="code"><code>
&lt;script setup&gt;
// Con alias - más limpio
import MiBoton from '@components/MiBoton.vue'
import Header from '@components/layout/Header.vue'

// Sin alias - más complicado
import MiBoton from '../../../components/MiBoton.vue'
&lt;/script&gt;
        </code></pre>
      </div>

      <h3 class="subtitle-sm">3. Importación Dinámica (Lazy Loading)</h3>
      <p class="p">
        Carga componentes solo cuando se necesitan, mejorando el performance.
      </p>

      <div class="code-block">
        <h3 class="code-title">Composition API</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="cargarModal"&gt;Abrir Modal Pesado&lt;/button&gt;
    
    &lt;component
      :is="ModalDinamico"
      v-if="mostrarModal"
      @cerrar="mostrarModal = false"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, shallowRef, defineAsyncComponent } from 'vue'

const mostrarModal = ref(false)
const ModalDinamico = shallowRef(null)

// Método 1: Usando defineAsyncComponent
const ModalAsync = defineAsyncComponent(() =>
  import('@components/ModalPesado.vue')
)

// Método 2: Carga manual
const cargarModal = async () => {
  if (!ModalDinamico.value) {
    // El componente se carga solo cuando se necesita
    const modulo = await import('@components/ModalPesado.vue')
    ModalDinamico.value = modulo.default
  }
  mostrarModal.value = true
}
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: Carga Dinámica</h3>
        <div class="p">
          <button @click="cargarModalDinamico" class="demo-button">
            Cargar Modal Dinámicamente
          </button>
          <p v-if="cargando" class="mensaje-carga">⏳ Cargando componente...</p>

          <component
            v-if="modalCargado && mostrarModalDinamico"
            :is="ModalDinamicoComponent"
            @cerrar="mostrarModalDinamico = false"
          />
        </div>
      </div>

      <h3 class="subtitle-sm">4. Registro Global de Componentes</h3>
      <p class="p">
        Para componentes que se usan en toda la aplicación.
      </p>

      <div class="code-block">
        <h3 class="code-title">main.js</h3>
        <pre class="code"><code>
import { createApp } from 'vue'
import App from './App.vue'

// Importar componentes globales
import BaseButton from '@components/ui/BaseButton.vue'
import BaseInput from '@components/ui/BaseInput.vue'
import BaseModal from '@components/ui/BaseModal.vue'

const app = createApp(App)

// Registrar globalmente
app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)
app.component('BaseModal', BaseModal)

app.mount('#app')
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Uso en cualquier componente</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- No necesita importación --&gt;
    &lt;BaseButton&gt;Botón Global&lt;/BaseButton&gt;
    &lt;BaseInput placeholder="Input global" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// No es necesario importar
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Estructura de Carpetas Recomendada</h2>

      <div class="code-block">
        <h3 class="code-title">Organización de Componentes</h3>
        <pre class="code"><code>
src/
├── components/           # Componentes reutilizables
│   ├── ui/              # Componentes de UI base
│   │   ├── Button.vue
│   │   ├── Input.vue
│   │   ├── Modal.vue
│   │   └── index.js      # Exportación consolidada
│   ├── forms/           # Componentes de formularios
│   │   ├── LoginForm.vue
│   │   └── ContactForm.vue
│   └── layout/          # Componentes de layout
│       ├── Header.vue
│       ├── Footer.vue
│       └── Sidebar.vue
├── views/               # Vistas/páginas
│   ├── Home.vue
│   ├── About.vue
│   └── Contact.vue
└── App.vue
        </code></pre>
      </div>

      <h3 class="subtitle-sm">Exportación Consolidada</h3>
      <p class="p">
        Crea archivos <code>index.js</code> para exportar múltiples componentes.
      </p>

      <div class="code-block">
        <h3 class="code-title">components/ui/index.js</h3>
        <pre class="code"><code>
// Exportar todos los componentes UI
export { default as Button } from './Button.vue'
export { default as Input } from './Input.vue'
export { default as Modal } from './Modal.vue'
export { default as Card } from './Card.vue'
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Uso de exportación consolidada</h3>
        <pre class="code"><code>
&lt;script setup&gt;
// Importar múltiples componentes de una vez
import { Button, Input, Modal, Card } from '@components/ui'

// En lugar de:
// import Button from '@components/ui/Button.vue'
// import Input from '@components/ui/Input.vue'
// import Modal from '@components/ui/Modal.vue'
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Ejemplo Práctico: Dashboard</h2>

      <div class="example">
        <h3 class="example-title">Dashboard con Múltiples Componentes</h3>
        <div class="dashboard-demo">
          <div class="dashboard-header">
            <h3>Mi Dashboard</h3>
            <BotonEjemplo @click="agregarWidget">
              Agregar Widget
            </BotonEjemplo>
          </div>

          <div class="widgets-grid">
            <TarjetaEjemplo
              v-for="(widget, index) in widgets"
              :key="index"
              :titulo="widget.titulo"
              :contenido="widget.contenido"
              @eliminar="eliminarWidget(index)"
            />
          </div>

          <div class="dashboard-stats">
            <p>Total de widgets: <strong>{{ widgets.length }}</strong></p>
            <p>Última actualización: <strong>{{ ultimaActualizacion }}</strong></p>
          </div>
        </div>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código del Dashboard</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div class="dashboard"&gt;
    &lt;!-- Header --&gt;
    &lt;DashboardHeader
      titulo="Mi Dashboard"
      @agregar-widget="agregarWidget"
    /&gt;
    
    &lt;!-- Grid de widgets --&gt;
    &lt;div class="widgets-grid"&gt;
      &lt;WidgetCard
        v-for="(widget, index) in widgets"
        :key="widget.id"
        :titulo="widget.titulo"
        :contenido="widget.contenido"
        @eliminar="eliminarWidget(index)"
      /&gt;
    &lt;/div&gt;
    
    &lt;!-- Estadísticas --&gt;
    &lt;DashboardStats
      :total-widgets="widgets.length"
      :ultima-actualizacion="ultimaActualizacion"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Importar componentes
import DashboardHeader from '@components/dashboard/DashboardHeader.vue'
import WidgetCard from '@components/dashboard/WidgetCard.vue'
import DashboardStats from '@components/dashboard/DashboardStats.vue'

import { ref, computed, onMounted } from 'vue'

const widgets = ref([])
const ultimaActualizacion = ref(new Date())

const agregarWidget = () => {
  widgets.value.push({
    id: Date.now(),
    titulo: `Widget ${widgets.value.length + 1}`,
    contenido: 'Contenido del widget'
  })
  ultimaActualizacion.value = new Date()
}

const eliminarWidget = (index) => {
  widgets.value.splice(index, 1)
  ultimaActualizacion.value = new Date()
}

onMounted(() => {
  // Cargar widgets iniciales
  widgets.value = [
    { id: 1, titulo: 'Widget 1', contenido: 'Widget inicial' },
    { id: 2, titulo: 'Widget 2', contenido: 'Otro widget' }
  ]
})
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Errores Comunes y Soluciones</h2>

      <div class="error-examples">
        <div class="error-item">
          <h4>❌ Error: Componente no registrado</h4>
          <pre class="code-error"><code>
&lt;template&gt;
  &lt;MiComponente /&gt; &lt;!-- Error: Componente no registrado --&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Falta importar el componente
&lt;/script&gt;
          </code></pre>
          <p class="solution"><strong>Solución:</strong> Importar y registrar el componente</p>
        </div>

        <div class="error-item">
          <h4>❌ Error: Ruta incorrecta</h4>
          <pre class="code-error"><code>
// Error: Ruta incorrecta
import MiComponente from './components/MiComponente.vue'

// Si el archivo está en src/components/MiComponente.vue
          </code></pre>
          <p class="solution"><strong>Solución:</strong> Usar alias @/ para rutas absolutas</p>
        </div>

        <div class="error-item">
          <h4>❌ Error: Nombre duplicado</h4>
          <pre class="code-error"><code>
&lt;script setup&gt;
import Button from '@/components/Button.vue'
import Button from '@/components/ui/Button.vue' // Error: Duplicado

// Solución: usar alias
import UIButton from '@/components/ui/Button.vue'
import FormButton from '@/components/forms/Button.vue'
&lt;/script&gt;
          </code></pre>
          <p class="solution"><strong>Solución:</strong> Usar nombres diferentes o alias en la importación</p>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Mejores Prácticas</h2>
      <ul>
        <li class="p"><strong>Usar PascalCase:</strong> Nombres de componentes en PascalCase (MiComponente.vue)</li>
        <li class="p"><strong>Alias para rutas:</strong> Usar @/ para rutas absolutas</li>
        <li class="p"><strong>Lazy loading:</strong> Para componentes pesados o poco usados</li>
        <li class="p"><strong>Exportación consolidada:</strong> Usar archivos index.js para grupos de componentes</li>
        <li class="p"><strong>Registro global mínimo:</strong> Solo componentes realmente globales</li>
        <li class="p"><strong>Organización lógica:</strong> Agrupar componentes por funcionalidad</li>
      </ul>

    </section>
  </div>
</template>

<script>
import { ref, shallowRef } from 'vue'

// Componentes de ejemplo para la demo
const BotonEjemplo = {
  template: `
    <button class="boton-ejemplo" @click="$emit('click')">
      <slot></slot>
    </button>
  `,
  emits: ['click']
}

const TarjetaEjemplo = {
  template: `
    <div class="tarjeta-ejemplo">
      <div class="tarjeta-header">
        <h4>{{ titulo }}</h4>
        <button v-if="mostrarEliminar" class="btn-eliminar" @click="$emit('eliminar')">
          ×
        </button>
      </div>
      <div class="tarjeta-contenido">
        {{ contenido }}
      </div>
    </div>
  `,
  props: {
    titulo: String,
    contenido: String,
    mostrarEliminar: {
      type: Boolean,
      default: false
    }
  },
  emits: ['eliminar']
}

const ModalDinamicoComponent = {
  template: `
    <div class="modal-dinamico-overlay" @click.self="$emit('cerrar')">
      <div class="modal-dinamico-content">
        <h3>¡Modal Cargado Dinámicamente!</h3>
        <p>Este componente se cargó solo cuando fue necesario.</p>
        <p><strong>Mejora el performance de tu aplicación.</strong></p>
        <button @click="$emit('cerrar')" class="btn-cerrar">
          Cerrar Modal
        </button>
      </div>
    </div>
  `,
  emits: ['cerrar']
}

export default {
  setup() {
    // Estado para las demos
    const contadorBasico = ref(0)
    const mostrarModalDinamico = ref(false)
    const modalCargado = ref(false)
    const cargando = ref(false)
    const widgets = ref([
      { titulo: 'Widget Principal', contenido: 'Este es un widget de ejemplo' },
      { titulo: 'Estadísticas', contenido: 'Datos importantes del sistema' }
    ])

    // Métodos
    const cargarModalDinamico = async () => {
      cargando.value = true

      // Simular carga asíncrona
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Usar la definición del componente que ya existe en el script
      modalCargado.value = true
      cargando.value = false
      mostrarModalDinamico.value = true
    }

    const agregarWidget = () => {
      widgets.value.push({
        titulo: `Widget ${widgets.value.length + 1}`,
        contenido: 'Nuevo widget agregado dinámicamente'
      })
    }

    const eliminarWidget = (index) => {
      widgets.value.splice(index, 1)
    }

    const ultimaActualizacion = ref(new Date().toLocaleTimeString())

    return {
      BotonEjemplo,
      TarjetaEjemplo,
      ModalDinamicoComponent,
      contadorBasico,
      mostrarModalDinamico,
      modalCargado,
      cargando,
      widgets,
      cargarModalDinamico,
      agregarWidget,
      eliminarWidget,
      ultimaActualizacion
    }
  }
}
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

/* Demo Styles */
.component-demo {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  align-items: flex-start;
}

.boton-ejemplo {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.boton-ejemplo:hover {
  background-color: #359f72;
  transform: translateY(-2px);
}

.tarjeta-ejemplo {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  min-width: 200px;
}

.tarjeta-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.tarjeta-header h4 {
  margin: 0;
  color: #1f2937;
  font-size: 1.1rem;
}

.btn-eliminar {
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.tarjeta-contenido {
  color: #6b7280;
  font-size: 0.9rem;
}

/* Modal Dinámico */
.modal-dinamico-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-dinamico-content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 500px;
  text-align: center;
}

.btn-cerrar {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
}

.mensaje-carga {
  color: #f59e0b;
  font-style: italic;
  margin: 0.5rem 0;
}

/* Dashboard Demo */
.dashboard-demo {
  border: 2px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.5rem;
  background: white;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.dashboard-header h3 {
  margin: 0;
  color: #1f2937;
}

.widgets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.dashboard-stats {
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}

.demo-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  margin: 0.5rem 0;
}

.demo-button:hover {
  background-color: #359f72;
}

/* Errores */
.error-examples {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.error-item {
  border-left: 4px solid #ef4444;
  padding-left: 1rem;
}

.error-item h4 {
  color: #ef4444;
  margin: 0 0 0.5rem 0;
}

.code-error {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.25rem;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: #dc2626;
}

.solution {
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  color: #166534;
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
  .component-demo {
    flex-direction: column;
  }
  .dashboard-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .widgets-grid {
    grid-template-columns: 1fr;
  }
}
</style>