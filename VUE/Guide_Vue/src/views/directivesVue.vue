<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Directivas de Vue</h1>
      <p class="p">
        Las directivas son instrucciones especiales en el DOM que Vue.js utiliza
        para aplicar comportamientos reactivos a los elementos. Se reconocen por
        el prefijo <code>v-</code> y son una parte fundamental del poder de Vue.
      </p>

      <hr />

      <h2 class="subtitle">Directivas Básicas</h2>
      <p class="p">
        Vue incluye un conjunto de directivas integradas que cubren los casos de
        uso más comunes en el desarrollo de aplicaciones.
      </p>

      <!-- v-text -->
      <h3 class="subtitle-sm">v-text</h3>
      <p class="p">
        Actualiza el <code>textContent</code> del elemento. Similar a la
        interpolación pero reemplaza todo el contenido.
      </p>

      <div class="example">
        <h3 class="example-title">Resultado</h3>
        <p class="p" v-text="mensaje"></p>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código</h3>
        <article class="code">
          <pre><code>&lt;template&gt;
  &lt;p v-text="mensaje"&gt;&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const mensaje = ref('¡Hola desde v-text!');
&lt;/script&gt;</code></pre>
        </article>
      </div>

      <!-- v-html -->
      <h3 class="subtitle-sm">v-html</h3>
      <p class="p">
        Actualiza el <code>innerHTML</code> del elemento. Úsalo con precaución
        ya que puede exponerte a ataques XSS.
      </p>

      <div class="example">
        <h3 class="example-title">Resultado</h3>
        <p class="p" v-html="htmlContent"></p>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código</h3>
        <article class="code">
          <pre><code>&lt;template&gt;
  &lt;p v-html="htmlContent"&gt;&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const htmlContent = ref('&lt;strong&gt;Texto en negrita&lt;/strong&gt; con &lt;em&gt;énfasis&lt;/em&gt;');
&lt;/script&gt;</code></pre>
        </article>
      </div>

      <!-- v-on -->
      <h3 class="subtitle-sm">v-on</h3>
      <p class="p">
        Escucha eventos del DOM y ejecuta algún código cuando son disparados. Se
        puede usar la forma abreviada <code>@</code>.
      </p>

      <div class="example">
        <h3 class="example-title">Resultado</h3>
        <p class="p">
          <button v-on:click="contador++" class="demo-button">
            Incrementar (v-on:click)
          </button>
          <button @click="contador--" class="demo-button">
            Decrementar (@click)
          </button>
        </p>
        <p class="p">Contador: {{ contador }}</p>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código</h3>
        <article class="code">
          <pre><code>&lt;template&gt;
  &lt;button v-on:click="contador++"&gt;Incrementar (v-on:click)&lt;/button&gt;
  &lt;button @click="contador--"&gt;Decrementar (@click)&lt;/button&gt;
  &lt;p&gt;Contador: {{ contador }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const contador = ref(0);
&lt;/script&gt;</code></pre>
        </article>
      </div>

      <!-- v-show -->
      <h3 class="subtitle-sm">v-show</h3>
      <p class="p">
        Alterna la visibilidad del elemento usando CSS (<code
          >display: none</code
        >). El elemento siempre se renderiza en el DOM.
      </p>

      <div class="example">
        <h3 class="example-title">Resultado</h3>
        <p class="p">
          <button @click="mostrar = !mostrar" class="demo-button">
            Alternar visibilidad
          </button>
        </p>
        <p class="p" v-show="mostrar">¡Este elemento se muestra u oculta!</p>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código</h3>
        <article class="code">
          <pre><code>&lt;template&gt;
  &lt;button @click="mostrar = !mostrar"&gt;Alternar visibilidad&lt;/button&gt;
  &lt;p v-show="mostrar"&gt;¡Este elemento se muestra u oculta!&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const mostrar = ref(true);
&lt;/script&gt;</code></pre>
        </article>
      </div>

      <!-- v-if, v-else-if, v-else -->
      <h3 class="subtitle-sm">v-if, v-else-if, v-else</h3>
      <p class="p">
        Renderiza condicionalmente un elemento basado en la veracidad de una
        expresión. A diferencia de v-show, estos elementos no se renderizan en
        el DOM si la condición es falsa.
      </p>

      <div class="example">
        <h3 class="example-title">Resultado</h3>
        <p class="p">
          <button @click="cambiarEstado" class="demo-button">
            Cambiar estado ({{ estado }})
          </button>
        </p>
        <p class="p" v-if="estado === 'activo'">El sistema está ACTIVO</p>
        <p class="p" v-else-if="estado === 'inactivo'">
          El sistema está INACTIVO
        </p>
        <p class="p" v-else>Estado desconocido</p>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código</h3>
        <article class="code">
          <pre><code>&lt;template&gt;
  &lt;button @click="cambiarEstado"&gt;Cambiar estado ({{ estado }})&lt;/button&gt;
  &lt;p v-if="estado === 'activo'"&gt;El sistema está ACTIVO&lt;/p&gt;
  &lt;p v-else-if="estado === 'inactivo'"&gt;El sistema está INACTIVO&lt;/p&gt;
  &lt;p v-else&gt;Estado desconocido&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const estado = ref('activo');

function cambiarEstado() {
  estado.value = estado.value === 'activo' ? 'inactivo' : 'activo';
}
&lt;/script&gt;</code></pre>
        </article>
      </div>

      <!-- v-for -->
      <h3 class="subtitle-sm">v-for</h3>
      <p class="p">
        Renderiza una lista de elementos basados en un array u objeto. Es la
        forma de hacer bucles en las plantillas de Vue.
      </p>

      <div class="example">
        <h3 class="example-title">Resultado</h3>
        <ul>
          <li v-for="(tarea, index) in tareas" :key="index" class="p">
            {{ index + 1 }}. {{ tarea }}
          </li>
        </ul>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código</h3>
        <article class="code">
          <pre><code>&lt;template&gt;
  &lt;ul&gt;
    &lt;li v-for="(tarea, index) in tareas" :key="index"&gt;
      {{ index + 1 }}. {{ tarea }}
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const tareas = ref([
  'Aprender Vue.js',
  'Practicar directivas',
  'Crear una aplicación'
]);
&lt;/script&gt;</code></pre>
        </article>
      </div>

      <!-- v-bind -->
      <h3 class="subtitle-sm">v-bind</h3>
      <p class="p">
        Enlaza dinámicamente uno o más atributos, o una prop de componente a una
        expresión. Se puede usar la forma abreviada <code>:</code>.
      </p>

      <div class="example">
        <h3 class="example-title">Resultado</h3>
        <p class="p">
          <input
            type="text"
            v-model="colorFavorito"
            placeholder="Escribe un color"
          />
        </p>
        <p class="p" :style="{ color: colorTexto }">
          Este texto cambiará de color según tu entrada: {{ colorFavorito }}
        </p>
        <p class="p">
          <button :disabled="!colorFavorito" class="demo-button">
            Botón {{ colorFavorito ? "habilitado" : "deshabilitado" }}
          </button>
        </p>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código</h3>
        <article class="code">
          <pre><code>&lt;template&gt;
  &lt;input type="text" v-model="colorFavorito" placeholder="Escribe un color"&gt;
  &lt;p :style="{ color: colorTexto }"&gt;
    Este texto cambiará de color según tu entrada: {{ colorFavorito }}
  &lt;/p&gt;
  &lt;button :disabled="!colorFavorito"&gt;
    Botón {{ colorFavorito ? 'habilitado' : 'deshabilitado' }}
  &lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed } from 'vue';
const colorFavorito = ref('');
const colorTexto = computed(() => {
  return colorFavorito.value || 'black';
});
&lt;/script&gt;</code></pre>
        </article>
      </div>

      <!-- v-model -->
      <h3 class="subtitle-sm">v-model</h3>
      <p class="p">
        Crea un enlace bidireccional entre un elemento de formulario y el estado
        de la aplicación. Es la forma de implementar "two-way binding" en Vue.
      </p>

      <div class="example">
        <h3 class="example-title">Resultado</h3>
        <p class="p">
          <input type="text" v-model="nombre" placeholder="Escribe tu nombre" />
        </p>
        <p class="p">Hola, {{ nombre || "desconocido" }}!</p>

        <p class="p">
          <input type="checkbox" v-model="aceptado" id="aceptar" />
          <label for="aceptar">Acepto los términos</label>
        </p>
        <p class="p">Estado: {{ aceptado ? "Aceptado" : "No aceptado" }}</p>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código</h3>
        <article class="code">
          <pre><code>&lt;template&gt;
  &lt;input type="text" v-model="nombre" placeholder="Escribe tu nombre"&gt;
  &lt;p&gt;Hola, {{ nombre || 'desconocido' }}!&lt;/p&gt;
  &lt;input type="checkbox" v-model="aceptado" id="aceptar"&gt;
  &lt;label for="aceptar"&gt;Acepto los términos&lt;/label&gt;
  &lt;p&gt;Estado: {{ aceptado ? 'Aceptado' : 'No aceptado' }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const nombre = ref('');
const aceptado = ref(false);
&lt;/script&gt;</code></pre>
        </article>
      </div>

      <!-- v-pre -->
      <h3 class="subtitle-sm">v-pre</h3>
      <p class="p">
        Omite la compilación para este elemento y todos sus hijos. Útil para
        mostrar mustaches crudos.
      </p>

      <div class="example">
        <h3 class="example-title">Resultado</h3>
        <p class="p" v-pre>
          Este contenido no será compilado: {{ estoNoSeRenderizará }}
        </p>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código</h3>
        <article class="code">
          <pre><code>&lt;template&gt;
  &lt;p v-pre&gt;Este contenido no será compilado: {{ estoNoSeRenderizará }}&lt;/p&gt;
&lt;/template&gt;</code></pre>
        </article>
      </div>

      <!-- v-once -->
      <h3 class="subtitle-sm">v-once</h3>
      <p class="p">
        Renderiza el elemento y el componente una sola vez. En las subsecuentes
        actualizaciones, el elemento/componente y todos sus hijos serán tratados
        como contenido estático.
      </p>

      <div class="example">
        <h3 class="example-title">Resultado</h3>
        <p class="p">
          <button @click="contadorOnce++" class="demo-button">
            Incrementar
          </button>
        </p>
        <p class="p">Valor normal: {{ contadorOnce }}</p>
        <p class="p" v-once>Valor con v-once: {{ contadorOnce }}</p>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código</h3>
        <article class="code">
          <pre><code>&lt;template&gt;
  &lt;button @click="contadorOnce++"&gt;Incrementar&lt;/button&gt;
  &lt;p&gt;Valor normal: {{ contadorOnce }}&lt;/p&gt;
  &lt;p v-once&gt;Valor con v-once: {{ contadorOnce }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const contadorOnce = ref(0);
&lt;/script&gt;</code></pre>
        </article>
      </div>

      <hr />

      <h2 class="subtitle">Resumen de Directivas</h2>
      <div class="table-container">
        <table class="directives-table">
          <thead>
            <tr>
              <th>Directiva</th>
              <th>Función</th>
              <th>Sintaxis Abreviada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>v-text</code></td>
              <td>Actualiza el textContent del elemento</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>v-html</code></td>
              <td>Actualiza el innerHTML del elemento</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>v-show</code></td>
              <td>Alterna visibilidad mediante CSS display</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>v-on</code></td>
              <td>Escucha eventos en el elemento</td>
              <td><code>@</code></td>
            </tr>
            <tr>
              <td><code>v-if</code></td>
              <td>Renderiza condicionalmente un elemento</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>v-else-if</code></td>
              <td>Representa el "bloque else if" para v-if</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>v-else</code></td>
              <td>Representa el "bloque else" para v-if</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>v-for</code></td>
              <td>Renderiza una lista de elementos</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>v-bind</code></td>
              <td>Enlaza dinámicamente un atributo</td>
              <td><code>:</code></td>
            </tr>
            <tr>
              <td><code>v-model</code></td>
              <td>Crea un enlace bidireccional en formularios</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>v-pre</code></td>
              <td>Omite la compilación en este elemento</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>v-once</code></td>
              <td>Renderiza el elemento una sola vez</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const mensaje = ref("¡Hola desde v-text!");
const htmlContent = ref(
  "<strong>Texto en negrita</strong> con <em>énfasis</em>"
);
const mostrar = ref(true);
const estado = ref("activo");
const tareas = ref([
  "Aprender Vue.js",
  "Practicar directivas",
  "Crear una aplicación",
]);
const contador = ref(0);
const colorFavorito = ref("");
const colorTexto = computed(() => {
  return colorFavorito.value || "black";
});
const nombre = ref("");
const aceptado = ref(false);
const contadorOnce = ref(0);

function cambiarEstado() {
  estado.value = estado.value === "activo" ? "inactivo" : "activo";
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
  width: 68%;
  padding-bottom: 2rem;
}
.title {
  font-size: 500%;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #1f2937;
}
.subtitle {
  font-size: 300%;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #1f2937;
  margin-top: 2rem;
}
.subtitle-sm {
  font-size: 200%;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #1f2937;
  margin-top: 1.5rem;
}
.p {
  font-size: 120%;
  font-weight: 550;
  letter-spacing: -0.025em;
  color: #1f2937;
  line-height: 1.5;
}
strong {
  color: #42b883;
}
.code {
  background-color: #1f2937;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
}
pre {
  margin: 0;
  color: white;
  font-family: monospace;
  font-size: 1rem;
  line-height: 1.5;
}
.code-block {
  margin-top: 2rem;
}
.code-title {
  font-size: 200%;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}
.example {
  background-color: #f3f4f6;
  border-left: 4px solid #42b883;
  padding: 1rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
}
.example-title {
  font-size: 150%;
  font-weight: 700;
  color: #1f2937;
}
.demo-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-right: 0.5rem;
  font-weight: 500;
}
.demo-button:hover {
  background-color: #359f72;
}
.demo-button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}
.table-container {
  overflow-x: auto;
  margin-top: 2rem;
}
.directives-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
.directives-table th,
.directives-table td {
  border: 1px solid #e5e7eb;
  padding: 0.75rem;
  text-align: left;
}
.directives-table th {
  background-color: #f3f4f6;
  font-weight: 600;
}
.directives-table code {
  background-color: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: monospace;
}
</style>