<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Interpolación</h1>
      <p class="p">
        La interpolación es la forma más sencilla y común de mostrar datos
        dinámicos en la interfaz de usuario de Vue. Usamos la sintaxis de
        <strong>doble bigote</strong> (<code>{{ }}</code>) para incrustar valores
        directamente en la plantilla HTML.
      </p>

      <hr />

      <h2 class="subtitle">¿Cómo funciona?</h2>
      <p class="p">
        Cuando Vue procesa tu plantilla, reemplaza la expresión dentro de los
        bigotes con el valor de la propiedad correspondiente. La clave de la
        interpolación es su <strong>reactividad</strong>: si el valor de la
        variable cambia en tu script, la vista se actualizará de forma
        automática, sin que necesites hacer nada.
      </p>

      <hr />

      <h2 class="subtitle">Ejemplo Práctico</h2>
      <p class="p">
        A continuación, te mostramos cómo la variable `mensaje` se inserta
        directamente en la plantilla.
      </p>

      <div class="example">
        <h3 class="example-title">Resultado</h3>
        <p class="p">
          Mensaje: <strong>{{ mensaje }}</strong>
        </p>
      </div>

      <div class="code-block">
        <h3 class="code-title">Código</h3>
        <p class="p">
          Así es como se vería el código en tu archivo `.vue`:
        </p>
        <pre class="code"><code>
&lt;template&gt;
  &lt;p&gt;Mensaje: &lt;strong&gt; &lbrace;&lbrace;mensaje&rbrace;&rbrace; &lt;/strong&gt;&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const mensaje = ref('Hola, soy un valor interpolado!');
&lt;/script&gt;
        </code></pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const mensaje = ref('Hola, soy un valor interpolado!');
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
</style>