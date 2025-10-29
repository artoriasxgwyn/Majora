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
              <span class="hook setup">setup</span>
              <span class="arrow">→</span>
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
          <div class="phase activation">
            <h4>Fase de Activación (KeepAlive)</h4>
            <div class="hooks">
              <span class="hook activated">activated</span>
              <span class="arrow">→</span>
              <span class="hook deactivated">deactivated</span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Hooks Principales</h2>

      <h3 class="subtitle-sm">1. setup (Composition API)</h3>
      <p class="p">
        El hook <code>setup</code> es el punto de entrada para la Composition API en Vue 3.
      </p>

      <div class="code-block">
        <h3 class="code-title">Composition API</h3>
        <pre class="code"><code>&lt;script setup&gt;
import { ref, reactive } from &amp;apos;vue&amp;apos;

const count = ref(0)
const state = reactive({ message: &amp;apos;Hola&amp;apos; })

console.log(&amp;apos;Setup ejecutado&amp;apos;)
&lt;/script&gt;</code></pre>
      </div>

      <h3 class="subtitle-sm">2. beforeCreate y created</h3>
      <p class="p">
        Estos hooks se ejecutan durante la <strong>fase de inicialización</strong> del componente.
      </p>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>export default {
  beforeCreate() {
    console.log(&amp;apos;beforeCreate - Componente inicializ&amp;aacute;ndose&amp;apos;)
  },
  created() {
    console.log(&amp;apos;created - Componente creado&amp;apos;)
    console.log(&amp;apos;Mensaje:&amp;apos;, this.mensaje)
  },
  data() {
    return {
      mensaje: &amp;apos;Hola Vue!&amp;apos;
    }
  }
}</code></pre>
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

      <h3 class="subtitle-sm">3. beforeMount y mounted</h3>
      <p class="p">
        Estos hooks se ejecutan durante la <strong>fase de montaje en el DOM</strong>.
      </p>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>export default {
  beforeMount() {
    console.log(&amp;apos;beforeMount - Antes del montaje&amp;apos;)
  },
  mounted() {
    console.log(&amp;apos;mounted - Componente montado&amp;apos;)
    this.cargarDatos()
  }
}</code></pre>
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

      <h3 class="subtitle-sm">4. beforeUpdate y updated</h3>
      <p class="p">
        Estos hooks se ejecutan cuando el componente <strong>se actualiza</strong>.
      </p>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>export default {
  data() {
    return {
      contador: 0,
      anterior: 0
    }
  },
  beforeUpdate() {
    this.anterior = this.contador
  },
  updated() {
    console.log(&amp;apos;Cambio:&amp;apos;, this.anterior, &amp;apos;&amp;rarr;&amp;apos;, this.contador)
  }
}</code></pre>
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

      <h3 class="subtitle-sm">5. beforeUnmount y unmounted</h3>
      <p class="p">
        Estos hooks se ejecutan cuando el componente <strong>se destruye</strong>.
      </p>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>export default {
  data() {
    return {
      intervalo: null
    }
  },
  mounted() {
    this.intervalo = setInterval(() =&amp;gt; {
      console.log(&amp;apos;Tick...&amp;apos;)
    }, 1000)
  },
  unmounted() {
    clearInterval(this.intervalo)
  }
}</code></pre>
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

      <h2 class="subtitle">Hooks de Keep-Alive</h2>

      <h3 class="subtitle-sm">6. activated y deactivated</h3>
      <p class="p">
        Estos hooks son específicos para componentes envueltos en <code>&lt;KeepAlive&gt;</code>.
      </p>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>export default {
  activated() {
    console.log(&amp;apos;activated - Componente activado&amp;apos;)
    this.reanudarActividad()
  },
  deactivated() {
    console.log(&amp;apos;deactivated - Componente desactivado&amp;apos;)
    this.pausarActividad()
  }
}</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Ejemplo: KeepAlive en Acción</h3>
        <div class="p">
          <p><strong>Componente actual:</strong> {{ componenteActual }}</p>
          <p><strong>Activaciones:</strong> {{ activaciones }}</p>
          <p><strong>Desactivaciones:</strong> {{ desactivaciones }}</p>
          <button @click="cambiarComponente" class="demo-button">
            Cambiar a {{ componenteActual === 'A' ? 'B' : 'A' }}
          </button>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Hooks de Manejo de Errores</h2>

      <h3 class="subtitle-sm">7. errorCaptured</h3>
      <p class="p">
        Captura errores de componentes hijos.
      </p>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>export default {
  errorCaptured(err, instance, info) {
    console.error(&amp;apos;Error capturado:&amp;apos;, err)
    this.error = err.message
    return false
  }
}</code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Hooks de Depuración</h2>

      <h3 class="subtitle-sm">8. renderTracked y renderTriggered</h3>
      <p class="p">
        Hooks de depuración que rastrean re-renderizados.
      </p>

      <div class="code-block">
        <h3 class="code-title">Composition API</h3>
        <pre class="code"><code>&lt;script setup&gt;
import { ref, onRenderTracked, onRenderTriggered } from &amp;apos;vue&amp;apos;

const contador = ref(0)

onRenderTracked((event) =&amp;gt; {
  console.log(&amp;apos;Dependencia rastreada:&amp;apos;, event)
})

onRenderTriggered((event) =&amp;gt; {
  console.log(&amp;apos;Re-render provocado por:&amp;apos;, event)
})
&lt;/script&gt;</code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Flujo Completo del Ciclo de Vida</h2>

      <div class="lifecycle-flow">
        <div class="flow-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Inicialización (Setup)</h4>
            <p><code>setup</code> → <code>beforeCreate</code> → <code>created</code></p>
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
        <li class="p"><strong>updated:</strong> Evitar modificar datos reactivos aquí</li>
        <li class="p"><strong>unmounted:</strong> Siempre limpiar intervals y event listeners</li>
        <li class="p"><strong>errorCaptured:</strong> Implementar para manejo de errores</li>
      </ul>

    </section>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated } from 'vue'

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
const componenteActual = ref('A')
const activaciones = ref(0)
const desactivaciones = ref(0)

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

// Hooks de KeepAlive
onActivated(() => {
  activaciones.value++
  agregarLog('activated: componente activado desde cache')
})

onDeactivated(() => {
  desactivaciones.value++
  agregarLog('deactivated: componente desactivado a cache')
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

const cambiarComponente = () => {
  componenteActual.value = componenteActual.value === 'A' ? 'B' : 'A'
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
  flex-wrap: wrap;
}
.hook {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  font-weight: 600;
}
.setup { background: #fef3c7; color: #d97706; }
.before-create { background: #fee2e2; color: #dc2626; }
.created { background: #dcfce7; color: #16a34a; }
.before-mount { background: #fef3c7; color: #d97706; }
.mounted { background: #dbeafe; color: #2563eb; }
.before-update { background: #ede9fe; color: #7c3aed; }
.updated { background: #fce7f3; color: #db2777; }
.before-unmount { background: #f3e8ff; color: #9333ea; }
.unmounted { background: #ffedd5; color: #ea580c; }
.activated { background: #dcfce7; color: #16a34a; }
.deactivated { background: #fef3c7; color: #d97706; }
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