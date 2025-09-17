<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Interpolación</h1>
      <p class="p">
        La interpolación es la forma más sencilla y común de mostrar datos
        dinámicos en la interfaz de usuario de Vue. Usamos la sintaxis de
        <strong>doble bigote</strong> (<code>&lbrace;&lbrace; &rbrace;&rbrace;</code>) para incrustar valores
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
        <article class="code">
          <div>
            <p class="p-code">&lt;template&gt;</p>
            <p class="p-code pl-4">&lt;p&gt;Mensaje: &lt;strong&gt;{{ mensaje }}&lt;/strong&gt;&lt;/p&gt;</p>
            <p class="p-code">&lt;/template&gt;</p>
            <p class="p-code"></p>
            <p class="p-code">&lt;script setup&gt;</p>
            <p class="p-code pl-4">import { ref } from 'vue';</p>
            <p class="p-code pl-4">const mensaje = ref('Hola, soy un valor interpolado!');</p>
            <p class="p-code">&lt;/script&gt;</p>
          </div>
        </article>
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
.p-code {
  color: white;
  font-family: monospace;
  font-size: 1rem;
}
.pl-4 {
  padding-left: 1.5rem;
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
</style>