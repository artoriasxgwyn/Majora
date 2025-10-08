<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Crear un Proyecto en Vue 3</h1>
      <p class="p">
        Para iniciar un nuevo proyecto en Vue 3, la forma más rápida y recomendada es usar <strong>Vite</strong>, una herramienta de compilación moderna que ofrece una experiencia de desarrollo ultrarrápida. Usaremos el comando <code>npm create vite@latest</code> para generar la estructura inicial del proyecto.
      </p>

      <hr />

      <h2 class="subtitle">¿Cómo funciona?</h2>
      <p class="p">
        Al ejecutar este comando en tu terminal, se iniciará un asistente interactivo que te guiará paso a paso para configurar tu proyecto. Podrás elegir el <strong>nombre</strong> de tu proyecto, seleccionar <strong>Vue</strong> como framework y escoger una variante, como JavaScript o TypeScript.
      </p>

      <hr />

      <h2 class="subtitle">Ejemplo Práctico</h2>
      <p class="p">
        A continuación, te mostramos los comandos y los pasos que debes seguir en tu terminal para crear e iniciar tu nuevo proyecto Vue.
      </p>

      <div class="example">
        <h3 class="example-title">Proceso en la Terminal</h3>
        <p class="p">
          Sigue estos tres sencillos pasos para tener tu proyecto funcionando en minutos.
        </p>
      </div>

      <div class="code-block">
        <h3 class="code-title">Comandos</h3>
        <p class="p">
          Estos son los comandos que necesitas ejecutar en orden.
        </p>
        <article class="code">
          <div>
            <p class="p-code">
              <span style="color: #8b949e;"># 1. Ejecuta el comando de creación y sigue las instrucciones</span>
            </p>
            <p class="p-code">npm create vite@latest</p>
            <p class="p-code"></p>
            <p class="p-code">
              <span style="color: #8b949e;"># 2. Navega al directorio de tu nuevo proyecto</span>
            </p>
            <p class="p-code">cd &lt;nombre-del-proyecto&gt;</p>
            <p class="p-code"></p>
            <p class="p-code">
              <span style="color: #8b949e;"># 3. Instala las dependencias necesarias</span>
            </p>
            <p class="p-code">npm install</p>
            <p class="p-code"></p>
            <p class="p-code">
              <span style="color: #8b949e;"># 4. Inicia el servidor de desarrollo</span>
            </p>
            <p class="p-code">npm run dev</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
// No se necesita lógica de script para esta vista estática.
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
code {
  background-color: #e5e7eb;
  color: #ef4444;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-family: monospace;
}
.code {
  background-color: #1f2937;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-top: 1rem;
}
.p-code {
  color: white;
  font-family: monospace;
  font-size: 1rem;
  line-height: 1.75;
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