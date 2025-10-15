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

      <div class="code-block">
        <h3 class="code-title">Opciones de Configuración</h3>
        <p class="p">
          Durante la configuración, el asistente te mostrará una lista completa de frameworks. Puedes elegir el que prefieras a tu gusto, aunque para este tutorial nos enfocaremos en <strong>Vue</strong> con <strong>JavaScript</strong>.
        </p>
        <article class="code">
            <div>
                <p class="p-code">
                    <span style="color: #8b949e;"># Elige tu framework preferido...</span>
                </p>
                <p class="p-code">
                    <span style="color: #22c55e;">✔</span>
                    <span style="color: #e5e7eb;"> Select a framework: </span>
                    <span style="color: #8b949e;">… Vue</span>
                </p>
                <div class="pl-4">
                    <p class="p-code" style="color: #8b949e;">Vanilla</p>
                    <p class="p-code" style="color: #42b883;">❯ Vue</p>
                    <p class="p-code" style="color: #8b949e;">React</p>
                    <p class="p-code" style="color: #8b949e;">Preact</p>
                    <p class="p-code" style="color: #8b949e;">Lit</p>
                    <p class="p-code" style="color: #8b949e;">Svelte</p>
                    <p class="p-code" style="color: #8b949e;">Solid</p>
                    <p class="p-code" style="color: #8b949e;">Qwik</p>
                    <p class="p-code" style="color: #8b949e;">Others</p>
                </div>
                <p class="p-code"></p>
                <p class="p-code">
                    <span style="color: #8b949e;"># ...y después una variante (JavaScript o TypeScript).</span>
                </p>
                <p class="p-code">
                    <span style="color: #22c55e;">✔</span>
                    <span style="color: #e5e7eb;"> Select a variant: </span>
                    <span style="color: #8b949e;">… JavaScript</span>
                </p>
                <div class="pl-4">
                    <p class="p-code" style="color: #42b883;">❯ JavaScript</p>
                    <p class="p-code" style="color: #8b949e;">TypeScript</p>
                </div>
            </div>
        </article>
      </div>

      <hr />

      <h2 class="subtitle">Proceso Completo de Creación</h2>
      <p class="p">
        Cuando ejecutes el comando, verás un proceso interactivo completo con todas las opciones disponibles. Aquí te mostramos cómo se ve típicamente el flujo completo:
      </p>

      <div class="code-block">
        <h3 class="code-title">Flujo Completo en Terminal</h3>
        <article class="code">
          <div>
            <p class="p-code"><span style="color: #8b949e;">> proyecto@1.0.0 npx</span></p>
            <p class="p-code"><span style="color: #8b949e;">> create-vite</span></p>
            <p class="p-code"></p>
            <p class="p-code"><span style="color: #8b949e;">Project name:</span></p>
            <p class="p-code"><span style="color: #e5e7eb;">mi-proyecto-vue</span></p>
            <p class="p-code"></p>
            <p class="p-code"><span style="color: #8b949e;">Select a framework:</span></p>
            <p class="p-code"><span style="color: #e5e7eb;">Vue</span></p>
            <p class="p-code"></p>
            <p class="p-code"><span style="color: #8b949e;">Select a variant:</span></p>
            <p class="p-code"><span style="color: #e5e7eb;">JavaScript</span></p>
            <p class="p-code"></p>
            <p class="p-code"><span style="color: #8b949e;">Use rolldown-vite (Experimental):</span></p>
            <p class="p-code"><span style="color: #e5e7eb;">No</span></p>
            <p class="p-code"></p>
            <p class="p-code"><span style="color: #8b949e;">Install with npm and start now?</span></p>
            <p class="p-code"><span style="color: #e5e7eb;">Yes</span></p>
            <p class="p-code"></p>
            <p class="p-code"><span style="color: #8b949e;">Scaffolding project in /ruta/de/tu/proyecto/mi-proyecto-vue...</span></p>
            <p class="p-code"><span style="color: #8b949e;">Installing dependencies with npm...</span></p>
            <p class="p-code"><span style="color: #8b949e;">done.</span></p>
            <p class="p-code"></p>
            <p class="p-code"><span style="color: #8b949e;">¡Proyecto creado exitosamente! 🎉</span></p>
          </div>
        </article>
      </div>

      <div class="example">
        <h3 class="example-title">💡 Nota Importante</h3>
        <p class="p">
          El asistente te preguntará si quieres instalar las dependencias inmediatamente. Si seleccionas "Yes", Vite automáticamente ejecutará <code>npm install</code> por ti. Si seleccionas "No", deberás instalar las dependencias manualmente después.
        </p>
      </div>

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
            <p class="p-code">cd mi-proyecto-vue</p>
            <p class="p-code"></p>
            <p class="p-code">
              <span style="color: #8b949e;"># 3. Instala las dependencias necesarias (si no lo hiciste automáticamente)</span>
            </p>
            <p class="p-code">npm install</p>
            <p class="p-code"></p>
            <p class="p-code">
              <span style="color: #8b949e;"># 4. Inicia el servidor de desarrollo</span>
            </p>
            <p class="p-code">npm run dev</p>
            <p class="p-code"></p>
            <p class="p-code">
              <span style="color: #8b949e;"># 5. Abre tu navegador en la URL que aparece en la terminal</span>
            </p>
            <p class="p-code"><span style="color: #8b949e;"># Normalmente: http://localhost:5173</span></p>
          </div>
        </article>
      </div>

      <div class="example">
        <h3 class="example-title">✅ Listo para Empezar</h3>
        <p class="p">
          Una vez que completes estos pasos, tendrás un proyecto Vue 3 completamente funcional con hot-reload, build optimizado y todas las características modernas de Vite. ¡Ahora puedes comenzar a desarrollar tu aplicación!
        </p>
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