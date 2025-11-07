<template>
  <div  ref="element" class="father">
    <section class="content">
      <h1 class="title">Ciclo de Vida de Vue - Composition API</h1>
      <p class="p">
        El <strong>ciclo de vida</strong> de un componente Vue representa las diferentes etapas por las que pasa desde su creación hasta su destrucción. En Composition API, usamos funciones especiales con prefijo "on" para acceder a estos hooks.
      </p>

      <hr />

      <h2 class="subtitle">¿Qué son los Hooks del Ciclo de Vida?</h2>
      <p class="p">
        Los hooks son funciones especiales que Vue ejecuta automáticamente en momentos específicos del ciclo de vida del componente. En Composition API, todos los hooks empiezan con "on" (onMounted, onUpdated, etc.).
      </p>

      <div class="example">
        <h3 class="example-title">Diagrama del Ciclo de Vida</h3>
        <div class="lifecycle-diagram">
          <div class="phase creation">
            <h4>Fase de Creación</h4>
            <div class="hooks">
              <span class="hook setup">setup</span>
              <span class="arrow">→</span>
              <span class="hook created">(código en setup)</span>
            </div>
          </div>
          <div class="phase mounting">
            <h4>Fase de Montaje</h4>
            <div class="hooks">
              <span class="hook before-mount">onBeforeMount</span>
              <span class="arrow">→</span>
              <span class="hook mounted">onMounted</span>
            </div>
          </div>
          <div class="phase updating">
            <h4>Fase de Actualización</h4>
            <div class="hooks">
              <span class="hook before-update">onBeforeUpdate</span>
              <span class="arrow">→</span>
              <span class="hook updated">onUpdated</span>
            </div>
          </div>
          <div class="phase unmounting">
            <h4>Fase de Desmontaje</h4>
            <div class="hooks">
              <span class="hook before-unmount">onBeforeUnmount</span>
              <span class="arrow">→</span>
              <span class="hook unmounted">onUnmounted</span>
            </div>
          </div>
          <div class="phase activation">
            <h4>Fase de Activación (KeepAlive)</h4>
            <div class="hooks">
              <span class="hook activated">onActivated</span>
              <span class="arrow">→</span>
              <span class="hook deactivated">onDeactivated</span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Hooks Principales - Composition API</h2>

      <h3 class="subtitle-sm">1. setup - El punto de entrada</h3>
      <p class="p">
        En Composition API, el código dentro de <code>&lt;script setup&gt;</code> se ejecuta durante la fase de creación. Esto reemplaza los hooks <code>beforeCreate</code> y <code>created</code> de Options API.
      </p>

      <div class="code-block">
        <h3 class="code-title">Código para probar</h3>
        <pre class="code"><code>&lt;script setup&gt;
// Este código se ejecuta en la fase de creación
import { ref, onMounted } from 'vue'

const count = ref(0)
const message = ref('Hola Vue 3')

// Equivalente a created() en Options API
console.log('Componente creado - datos inicializados')

onMounted(() => {
  console.log('Componente montado en el DOM')
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;{&lcub; message &rcub;}&lt;/p&gt;
    &lt;p&gt;Contador: &lcub;{ count &rcub;}&lt;/p&gt;
    &lt;button @click="count++"&gt;Incrementar&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Ejemplo Práctico</h3>
        <div class="p">
          <p><strong>Fase actual:</strong> {{ faseActual }}</p>
          <p><strong>Contador:</strong> {{ count }}</p>
          <button @click="count++" class="demo-button">Incrementar</button>
        </div>
      </div>

      <h3 class="subtitle-sm">2. onBeforeMount y onMounted</h3>
      <p class="p">
        <code>onBeforeMount</code> se ejecuta justo antes de que el componente se monte en el DOM. <code>onMounted</code> se ejecuta después de que el componente haya sido montado, cuando ya podemos acceder a los elementos del DOM.
      </p>

      <div class="code-block">
        <h3 class="code-title">Código para probar</h3>
        <pre class="code"><code>&lt;script setup&gt;
import { ref, onBeforeMount, onMounted } from 'vue'

const elemento = ref(null)
const altura = ref(0)

onBeforeMount(() => {
  console.log('onBeforeMount - Antes de montar en el DOM')
  // elemento.value es null aquí porque el DOM aún no está montado
})

onMounted(() => {
  console.log('onMounted - Componente montado en el DOM')
  // Ahora podemos acceder al DOM
  if (elemento.value) {
    altura.value = elemento.value.offsetHeight
    console.log('Altura del elemento:', altura.value)
  }
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div ref="elemento"&gt;
    &lt;p&gt;Altura: {&lcub; altura &rcub;}px&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
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

      <h3 class="subtitle-sm">3. onBeforeUpdate y onUpdated</h3>
      <p class="p">
        Estos hooks se ejecutan cuando el componente se actualiza debido a cambios en los datos reactivos. <code>onBeforeUpdate</code> se llama antes de que el DOM se vuelva a renderizar, y <code>onUpdated</code> se llama después de que el DOM se haya actualizado.
      </p>

      <div class="code-block">
        <h3 class="code-title">Código para probar</h3>
        <pre class="code"><code>&lt;script setup&gt;
import { ref, onBeforeUpdate, onUpdated } from 'vue'

const contador = ref(0)
const anterior = ref(0)
const actualizaciones = ref(0)

onBeforeUpdate(() => {
  anterior.value = contador.value
  console.log('onBeforeUpdate - Antes de actualizar el DOM')
})

onUpdated(() => {
  actualizaciones.value++
  console.log('onUpdated - DOM actualizado')
  console.log('Cambio:', anterior.value, '→', contador.value)
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Contador: {&lcub; contador &rcub;}&lt;/p&gt;
    &lt;button @click="contador++"&gt;Incrementar&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
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
       <p class="p">
       Datazo el ejemplo se hizo con un <code>watch()</code> esto en la vida real con un <code>onUpdate()</code> hubiera hecho un bucle, por que si efectuamos un cambio en el dom,  <code>onUpdate()</code> lo reconoce y suma a la variable actualizar y con este cambio al dom, <code>onUpdate()</code> lo vuelve a actualizar y se vuelve monda.
      </p>

      <h3 class="subtitle-sm">4. onBeforeUnmount y onUnmounted</h3>
      <p class="p">
        Estos hooks se ejecutan cuando el componente se destruye. Son ideales para limpiar recursos como intervals, event listeners o conexiones a APIs.
      </p>

      <div class="code-block">
        <h3 class="code-title">Código para probar</h3>
        <pre class="code"><code>&lt;script setup&gt;
import { ref, onMounted, onUnmounted } from 'vue'

const ticks = ref(0)
let intervalo = null

onMounted(() => {
  intervalo = setInterval(() => {
    ticks.value++
    console.log('Tick:', ticks.value)
  }, 1000)
})

onUnmounted(() => {
  if (intervalo) {
    clearInterval(intervalo)
    console.log('Intervalo limpiado - recursos liberados')
  }
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Ticks: {&lcub; ticks &rcub;}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
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

      <h3 class="subtitle-sm">5. onActivated y onDeactivated</h3>
      <p class="p">
        Estos hooks son específicos para componentes envueltos en <code>&lt;KeepAlive&gt;</code>. Se ejecutan cuando el componente se activa o desactiva sin ser destruido.
      </p>

      <div class="code-block">
        <h3 class="code-title">Código para probar</h3>
        <pre class="code"><code>&lt;script setup&gt;
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  console.log('onActivated - Componente activado desde cache')
  // Reanudar actividades (ej: peticiones, temporizadores)
})

onDeactivated(() => {
  console.log('onDeactivated - Componente desactivado a cache')
  // Pausar actividades para ahorrar recursos
})
&lt;/script&gt;</code></pre>
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

      <h3 class="subtitle-sm">6. onErrorCaptured</h3>
      <p class="p">
        Captura errores de componentes hijos. Útil para implementar manejo de errores a nivel de componente.
      </p>

      <div class="code-block">
        <h3 class="code-title">Código para probar</h3>
        <pre class="code"><code>&lt;script setup&gt;
import { onErrorCaptured, ref } from 'vue'

const error = ref(null)

onErrorCaptured((err, instance, info) => {
  console.error('Error capturado:', err)
  error.value = err.message
  // Retornar false para evitar que el error se propague más
  return false
})
&lt;/script&gt;</code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Hooks de Depuración</h2>

      <h3 class="subtitle-sm">7. onRenderTracked y onRenderTriggered</h3>
      <p class="p">
        Hooks de depuración que rastrean re-renderizados. Útiles para optimizar el rendimiento.
      </p>

      <div class="code-block">
        <h3 class="code-title">Código para probar</h3>
        <pre class="code"><code>&lt;script setup&gt;
import { ref, onRenderTracked, onRenderTriggered } from 'vue'

const contador = ref(0)
const mensaje = ref('Hola')

onRenderTracked((event) => {
  console.log('Dependencia rastreada:', event)
})

onRenderTriggered((event) => {
  console.log('Re-render provocado por:', event)
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
            <p>Código en <code>&lt;script setup&gt;</code> se ejecuta</p>
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
            <p><code>onBeforeMount</code> → <code>onMounted</code></p>
          </div>
        </div>
        <div class="flow-step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Actualizaciones (Reactividad)</h4>
            <p><code>onBeforeUpdate</code> → <code>onUpdated</code></p>
          </div>
        </div>
        <div class="flow-step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>Destrucción</h4>
            <p><code>onBeforeUnmount</code> → <code>onUnmounted</code></p>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Resumen de Hooks - Composition API</h2>
      
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Hook</th>
              <th>Propósito</th>
              <th>Cuándo se ejecuta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>onBeforeMount</code></td>
              <td>Preparación antes del montaje</td>
              <td>Antes de que el componente se monte en el DOM</td>
            </tr>
            <tr>
              <td><code>onMounted</code></td>
              <td>Acceso al DOM</td>
              <td>Después de que el componente se monta en el DOM</td>
            </tr>
            <tr>
              <td><code>onBeforeUpdate</code></td>
              <td>Preparación antes de actualizar</td>
              <td>Antes de que el DOM se re-renderice por cambios</td>
            </tr>
            <tr>
              <td><code>onUpdated</code></td>
              <td>Post-actualización</td>
              <td>Después de que el DOM se actualiza por cambios</td>
            </tr>
            <tr>
              <td><code>onBeforeUnmount</code></td>
              <td>Limpieza preparatoria</td>
              <td>Antes de que el componente se destruya</td>
            </tr>
            <tr>
              <td><code>onUnmounted</code></td>
              <td>Limpieza de recursos</td>
              <td>Después de que el componente se destruye</td>
            </tr>
            <tr>
              <td><code>onActivated</code></td>
              <td>Reactivación</td>
              <td>Cuando un componente KeepAlive se activa</td>
            </tr>
            <tr>
              <td><code>onDeactivated</code></td>
              <td>Desactivación</td>
              <td>Cuando un componente KeepAlive se desactiva</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 class="subtitle">Mejores Prácticas</h2>
      <ul>
        <li class="p"><strong>Setup:</strong> Usar para inicialización de datos y llamadas API que no dependen del DOM</li>
        <li class="p"><strong>onMounted:</strong> Usar para operaciones que requieren acceso al DOM</li>
        <li class="p"><strong>onUpdated:</strong> Evitar modificar datos reactivos aquí para evitar bucles infinitos</li>
        <li class="p"><strong>onUnmounted:</strong> Siempre limpiar intervals, event listeners y conexiones</li>
        <li class="p"><strong>KeepAlive hooks:</strong> Usar para optimizar componentes que se muestran/ocultan frecuentemente</li>
      </ul>

    </section>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, watch } from 'vue'

// Estado para ejemplos
const faseActual = ref('created')
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
const count = ref(0)
const element = ref(null)
// Simular intervalo
let intervalo = null

// Hooks del ciclo de vida
onBeforeMount(() => {
  faseActual.value = 'onBeforeMount'
})

onMounted(() => {
  faseActual.value = 'onMounted'
  
  // Iniciar intervalo cuando el componente se monta
  if (componenteVisible.value) {
    intervalo = setInterval(() => {
      ticks.value++
    }, 1000)
  }
})

onBeforeUpdate(() => {
  anterior.value = contador.value
})
/*
onUpdated(() => {
  actualizaciones.value++
})
*/
watch(contador,(nuevo,viejo)=>{
  console.log(`este es el nuevo ${nuevo} y este es el anterior ${viejo}`)
   actualizaciones.value++
})

onBeforeUnmount(() => {
  // Limpiar intervalo cuando el componente se destruye
  if (intervalo) {
    clearInterval(intervalo)
  }
})

onUnmounted(() => {
  // Limpieza adicional si es necesaria
})

// Hooks de KeepAlive
onActivated(() => {
  activaciones.value++
  // Reanudar intervalo cuando el componente se activa
  if (componenteVisible.value && !intervalo) {
    intervalo = setInterval(() => {
      ticks.value++
    }, 1000)
  }
})

onDeactivated(() => {
  desactivaciones.value++
  //pausar intervalo cuando el componente se desactiva
  if (intervalo) {
    clearInterval(intervalo)
    intervalo = null
  }
})

//metodos
const medirElemento = () => {
  if (demoElement.value) {
    altura.value = demoElement.value.offsetHeight
  }
}
/*
onBeforeMount(() => {
  if (element.value) {
    element.value.style.backgroundColor = "green"
  }
})
onMounted(() => {
  if (element.value) {
    element.value.style.backgroundColor = "gray"
  }
})
*/
const incrementar = () => {
  contador.value++
}

const reiniciar = () => {
  contador.value = 0
  actualizaciones.value = 0
}

const toggleComponente = () => {
  componenteVisible.value = !componenteVisible.value
  
  if (componenteVisible.value) {
    // Componente montado - iniciar intervalo
    intervalo = setInterval(() => {
      ticks.value++
    }, 1000)
  } else {
    // Componente destruido - limpiar intervalo
    if (intervalo) {
      clearInterval(intervalo)
      intervalo = null
    }
  }
}

const cambiarComponente = () => {
  componenteActual.value = componenteActual.value === 'A' ? 'B' : 'A'
}

// Código en setup se ejecuta en fase de creación
faseActual.value = 'setup/created'
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
  transition: background-color 0.2s;
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

/* Comparison Table */
.comparison-table {
  margin-top: 1.5rem;
  overflow-x: auto;
}
.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.comparison-table th,
.comparison-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}
.comparison-table th {
  background-color: #42b883;
  color: white;
  font-weight: 600;
}
.comparison-table tr:nth-child(even) {
  background-color: #f9fafb;
}
.comparison-table code {
  background: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
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
  .comparison-table table {
    font-size: 0.9rem;
  }
}
</style>