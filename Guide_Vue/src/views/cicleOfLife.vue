[file name]: lifecycle.vue
[file content begin]
<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Ciclo de Vida de Vue</h1>
      <p class="p">
        El <strong>ciclo de vida</strong> de un componente Vue representa las diferentes etapas por las que pasa desde su creación hasta su destrucción. Comprender estos hooks es esencial para ejecutar código en el momento adecuado.
      </p>

      <hr />

      <h2 class="subtitle">¿Qué son los Hooks del Ciclo de Vida?</h2>
      <p class="p">
        Los hooks son funciones especiales que Vue ejecuta automáticamente en momentos específicos del ciclo de vida del componente. Permiten ejecutar código en fases clave como la creación, actualización y destrucción del componente.
      </p>

      <div class="example">
        <h3 class="example-title">Diagrama del Ciclo de Vida</h3>
        <div class="lifecycle-diagram">
          <div class="phase creation">
            <h4>Fase de Creación</h4>
            <div class="hooks">
              <span class="hook before-create">beforeCreate</span>
              <span class="arrow">→</span>
              <span class="hook created">created</span>
            </div>
          </div>
          <div class="phase mounting">
            <h4>Fase de Montaje</h4>
            <div class="hooks">
              <span class="hook before-mount">beforeMount</span>
              <span class="arrow">→</span>
              <span class="hook mounted">mounted</span>
            </div>
          </div>
          <div class="phase updating">
            <h4>Fase de Actualización</h4>
            <div class="hooks">
              <span class="hook before-update">beforeUpdate</span>
              <span class="arrow">→</span>
              <span class="hook updated">updated</span>
            </div>
          </div>
          <div class="phase unmounting">
            <h4>Fase de Desmontaje</h4>
            <div class="hooks">
              <span class="hook before-unmount">beforeUnmount</span>
              <span class="arrow">→</span>
              <span class="hook unmounted">unmounted</span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Hooks Principales</h2>

      <h3 class="subtitle-sm">1. beforeCreate y created</h3>
      <p class="p">
        Estos hooks se ejecutan durante la <strong>fase de inicialización</strong> del componente.
      </p>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>
export default {
  beforeCreate() {
    // El componente se está inicializando
    // NO hay acceso a data, computed, methods, etc.
    console.log('beforeCreate - Componente inicializándose')
  },
  created() {
    // El componente está creado
    // YA hay acceso a data, computed, methods
    // PERO el DOM aún no está montado
    console.log('created - Componente creado')
    console.log('Mensaje:', this.mensaje) // ✅ Acceso a data
  },
  data() {
    return {
      mensaje: 'Hola Vue!'
    }
  }
}
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Composition API</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { ref, onBeforeCreate, onCreated } from 'vue'

// En Composition API, created() se simula con setup()
const mensaje = ref('Hola Vue!')

// beforeCreate equivalente
onBeforeCreate(() => {
  console.log('Antes de la creación')
})

// created equivalente (el código en setup se ejecuta en esta fase)
console.log('created - Componente creado')
console.log('Mensaje:', mensaje.value)
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Ejemplo Práctico</h3>
        <div class="p">
          <p><strong>Fase actual:</strong> {{ faseActual }}</p>
          <p><strong>Logs:</strong></p>
          <div class="logs-container">
            <div v-for="(log, index) in logs" :key="index" class="log-entry">
              {{ log }}
            </div>
          </div>
        </div>
      </div>

      <h3 class="subtitle-sm">2. beforeMount y mounted</h3>
      <p class="p">
        Estos hooks se ejecutan durante la <strong>fase de montaje en el DOM</strong>.
      </p>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>
export default {
  beforeMount() {
    // El componente está a punto de ser montado en el DOM
    // El template está compilado pero NO insertado en el DOM
    console.log('beforeMount - Antes del montaje')
    console.log('Elemento:', this.$el) // ❌ undefined
  },
  mounted() {
    // El componente está montado en el DOM
    // YA se puede acceder a los elementos del DOM
    console.log('mounted - Componente montado')
    console.log('Elemento:', this.$el) // ✅ Elemento DOM
    
    // Ideal para: llamadas API, inicializar librerías, eventos DOM
    this.cargarDatos()
  },
  methods: {
    cargarDatos() {
      // Cargar datos iniciales
    }
  }
}
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Composition API</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { ref, onBeforeMount, onMounted } from 'vue'
import { cargarUsuarios } from '@/api/usuarioService'

const usuarios = ref([])
const elemento = ref(null)

onBeforeMount(() => {
  console.log('Antes del montaje en el DOM')
})

onMounted(() => {
  console.log('Componente montado en el DOM')
  console.log('Elemento:', elemento.value) // ✅ Referencia DOM
  
  // Cargar datos después del montaje
  cargarDatosIniciales()
})

const cargarDatosIniciales = async () => {
  usuarios.value = await cargarUsuarios()
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div ref="elemento"&gt;
    &lt;!-- Contenido del componente --&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Ejemplo: Acceso al DOM</h3>
        <div class="p">
          <div ref="demoElement" class="demo-box">
            <p>Este es un elemento del DOM</p>
            <p>Altura: {{ altura }}px</p>
          </div>
          <button @click="medirElemento" class="demo-button">Medir Elemento</button>
        </div>
      </div>

      <h3 class="subtitle-sm">3. beforeUpdate y updated</h3>
      <p class="p">
        Estos hooks se ejecutan cuando el componente <strong>se actualiza</strong> debido a cambios en datos reactivos.
      </p>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>
export default {
  data() {
    return {
      contador: 0,
      anterior: 0
    }
  },
  beforeUpdate() {
    // Se ejecuta ANTES de que el DOM se actualice
    // Los datos han cambiado, pero el DOM no se ha actualizado
    console.log('beforeUpdate - Antes de actualizar DOM')
    this.anterior = this.contador
  },
  updated() {
    // Se ejecuta DESPUÉS de que el DOM se actualice
    // Tanto los datos como el DOM están actualizados
    console.log('updated - DOM actualizado')
    console.log('Cambio:', this.anterior, '→', this.contador)
    
    // Cuidado: puede causar bucles infinitos si modificas datos aquí
  },
  methods: {
    incrementar() {
      this.contador++
    }
  }
}
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Composition API</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { ref, onBeforeUpdate, onUpdated } from 'vue'

const contador = ref(0)
const anterior = ref(0)

onBeforeUpdate(() => {
  console.log('Antes de la actualización del DOM')
  anterior.value = contador.value
})

onUpdated(() => {
  console.log('DOM actualizado')
  console.log('Cambio:', anterior.value, '→', contador.value)
})

const incrementar = () => {
  contador.value++
}
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Ejemplo: Seguimiento de Actualizaciones</h3>
        <div class="p">
          <p>Contador: <strong>{{ contador }}</strong></p>
          <p>Valor anterior: <strong>{{ anterior }}</strong></p>
          <p>Actualizaciones: <strong>{{ actualizaciones }}</strong></p>
          <button @click="incrementar" class="demo-button">Incrementar</button>
          <button @click="reiniciar" class="demo-button">Reiniciar</button>
        </div>
      </div>

      <h3 class="subtitle-sm">4. beforeUnmount y unmounted</h3>
      <p class="p">
        Estos hooks se ejecutan cuando el componente <strong>se destruye</strong> y se elimina del DOM.
      </p>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>
export default {
  data() {
    return {
      intervalo: null
    }
  },
  mounted() {
    // Iniciar un intervalo cuando el componente se monta
    this.intervalo = setInterval(() => {
      console.log('Tick...')
    }, 1000)
  },
  beforeUnmount() {
    // Se ejecuta ANTES de que el componente se destruya
    // El componente aún está completamente funcional
    console.log('beforeUnmount - Preparándose para destruir')
  },
  unmounted() {
    // Se ejecuta DESPUÉS de que el componente se destruya
    // Ideal para limpieza: intervals, event listeners, etc.
    console.log('unmounted - Componente destruido')
    clearInterval(this.intervalo) // ✅ Limpiar recursos
  }
}
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Composition API</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { ref, onBeforeUnmount, onUnmounted } from 'vue'

const intervalo = ref(null)

// Montaje
onMounted(() => {
  intervalo.value = setInterval(() => {
    console.log('Tick...')
  }, 1000)
})

// Desmontaje
onBeforeUnmount(() => {
  console.log('Preparándose para destruir el componente')
})

onUnmounted(() => {
  console.log('Componente destruido')
  clearInterval(intervalo.value)
})
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Ejemplo: Gestión de Recursos</h3>
        <div class="p">
          <p v-if="componenteVisible">
            <strong>Componente Montado</strong>
            <br>
            Ticks del intervalo: {{ ticks }}
          </p>
          <button @click="toggleComponente" class="demo-button">
            {{ componenteVisible ? 'Destruir' : 'Montar' }} Componente
          </button>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Hooks Adicionales</h2>

      <h3 class="subtitle-sm">errorCaptured</h3>
      <p class="p">
        Captura errores de componentes hijos. Útil para manejo global de errores.
      </p>

      <div class="code-block">
        <h3 class="code-title">Implementación</h3>
        <pre class="code"><code>
export default {
  errorCaptured(err, instance, info) {
    // Captura errores de componentes hijos
    console.error('Error capturado:', err)
    console.log('Componente:', instance)
    console.log('Información:', info)
    
    // Puedes mostrar un mensaje de error al usuario
    this.error = err.message
    
    // Return false para evitar que el error se propague
    return false
  },
  data() {
    return {
      error: null
    }
  }
}
        </code></pre>
      </div>

      <h3 class="subtitle-sm">renderTracked y renderTriggered (Solo Desarrollo)</h3>
      <p class="p">
        Hooks de depuración que rastrean qué dependencias causan re-renderizados.
      </p>

      <div class="code-block">
        <h3 class="code-title">Composition API</h3>
        <pre class="code"><code>
&lt;script setup&gt;
import { ref, onRenderTracked, onRenderTriggered } from 'vue'

const contador = ref(0)
const mensaje = ref('Hola')

onRenderTracked((event) => {
  console.log('Dependencia rastreada:', event)
})

onRenderTriggered((event) => {
  console.log('Re-render provocado por:', event)
})
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Flujo Completo del Ciclo de Vida</h2>

      <div class="lifecycle-flow">
        <div class="flow-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Inicialización</h4>
            <p><code>beforeCreate</code> → <code>created</code></p>
          </div>
        </div>
        <div class="flow-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Compilación del Template</h4>
            <p>Vue compila el template a funciones render</p>
          </div>
        </div>
        <div class="flow-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Montaje en DOM</h4>
            <p><code>beforeMount</code> → <code>mounted</code></p>
          </div>
        </div>
        <div class="flow-step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Actualizaciones (Reactividad)</h4>
            <p><code>beforeUpdate</code> → <code>updated</code></p>
            <p><em>Se repite cuando los datos cambian</em></p>
          </div>
        </div>
        <div class="flow-step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>Destrucción</h4>
            <p><code>beforeUnmount</code> → <code>unmounted</code></p>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Mejores Prácticas</h2>
      <ul>
        <li class="p"><strong>created/mounted:</strong> Usar para llamadas API e inicialización</li>
        <li class="p"><strong>updated:</strong> Evitar modificar datos reactivos aquí (riesgo de bucles infinitos)</li>
        <li class="p"><strong>unmounted:</strong> Siempre limpiar intervals, event listeners y recursos</li>
        <li class="p"><strong>errorCaptured:</strong> Implementar para manejo elegante de errores</li>
        <li class="p"><strong>Composition API:</strong> Preferir onMounted/onUnmounted para mejor organización</li>
      </ul>

    </section>

    <!-- Componente demostrativo para unmount -->
    <ComponenteHijo 
      v-if="componenteVisible" 
      @tick="actualizarTick"
    />
  </div>
</template>

<script>
// Componente hijo para demostrar unmount
const ComponenteHijo = {
  template: `
    <div class="componente-hijo">
      <p>🔧 Componente Hijo Activo</p>
    </div>
  `,
  mounted() {
    this.intervalo = setInterval(() => {
      this.$emit('tick')
    }, 1000)
  },
  beforeUnmount() {
    console.log('Componente hijo se va a destruir')
  },
  unmounted() {
    console.log('Componente hijo destruido')
    clearInterval(this.intervalo)
  }
}
</script>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

// Estado para ejemplos
const faseActual = ref('created')
const logs = ref([])
const altura = ref(0)
const demoElement = ref(null)
const contador = ref(0)
const anterior = ref(0)
const actualizaciones = ref(0)
const componenteVisible = ref(true)
const ticks = ref(0)

// Logging function
const agregarLog = (mensaje) => {
  logs.value.push(`[${new Date().toLocaleTimeString()}] ${mensaje}`)
}

// Hooks del ciclo de vida
onBeforeMount(() => {
  faseActual.value = 'beforeMount'
  agregarLog('beforeMount ejecutado')
})

onMounted(() => {
  faseActual.value = 'mounted'
  agregarLog('mounted ejecutado')
  agregarLog('Componente montado en el DOM')
})

onBeforeUpdate(() => {
  anterior.value = contador.value
  agregarLog(`beforeUpdate: contador cambiará a ${contador.value + 1}`)
})

onUpdated(() => {
  actualizaciones.value++
  agregarLog(`updated: contador actualizado a ${contador.value}`)
})

onBeforeUnmount(() => {
  agregarLog('beforeUnmount: componente se prepara para destruir')
})

onUnmounted(() => {
  agregarLog('unmounted: componente destruido')
})

// Métodos
const medirElemento = () => {
  if (demoElement.value) {
    altura.value = demoElement.value.offsetHeight
    agregarLog(`Elemento medido: ${altura.value}px`)
  }
}

const incrementar = () => {
  contador.value++
}

const reiniciar = () => {
  contador.value = 0
  actualizaciones.value = 0
  agregarLog('Contador reiniciado')
}

const toggleComponente = () => {
  componenteVisible.value = !componenteVisible.value
  agregarLog(`Componente ${componenteVisible.value ? 'montado' : 'destruido'}`)
}

const actualizarTick = () => {
  ticks.value++
}

// Simular created
agregarLog('created: componente inicializado')
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

/* Lifecycle Diagram */
.lifecycle-diagram {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}
.phase {
  padding: 1rem;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.phase h4 {
  margin: 0 0 0.5rem 0;
  color: #42b883;
}
.hooks {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.hook {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  font-weight: 600;
}
.before-create { background: #fee2e2; color: #dc2626; }
.created { background: #dcfce7; color: #16a34a; }
.before-mount { background: #fef3c7; color: #d97706; }
.mounted { background: #dbeafe; color: #2563eb; }
.before-update { background: #ede9fe; color: #7c3aed; }
.updated { background: #fce7f3; color: #db2777; }
.before-unmount { background: #f3e8ff; color: #9333ea; }
.unmounted { background: #ffedd5; color: #ea580c; }
.arrow {
  font-weight: bold;
  color: #6b7280;
}

/* Logs */
.logs-container {
  max-height: 200px;
  overflow-y: auto;
  background: #1f2937;
  color: white;
  padding: 1rem;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
}
.log-entry {
  padding: 0.25rem 0;
  border-bottom: 1px solid #374151;
}

/* Demo Elements */
.demo-box {
  border: 2px solid #42b883;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  background: white;
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

/* Lifecycle Flow */
.lifecycle-flow {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
}
.flow-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.step-number {
  background: #42b883;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.step-content h4 {
  margin: 0;
  color: #1f2937;
}
.step-content p {
  margin: 0.25rem 0;
  color: #6b7280;
}

/* Componente Hijo */
.componente-hijo {
  background: #e0f2fe;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  border-left: 4px solid #0284c7;
}

@media (max-width: 768px) {
  .content {
    width: 95%;
  }
  .hooks {
    flex-direction: column;
    align-items: flex-start;
  }
  .flow-step {
    flex-direction: column;
    text-align: center;
  }
}
</style>
[file content end]