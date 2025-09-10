<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Creación de un Proyecto en Vue 3</h1>
      <p
        class="p"
      >Para crear un proyecto de Vue de manera eficiente, la herramienta recomendada es <strong>Vite</strong>. Este es un constructor de proyectos (o "build tool") que nos permite configurar rápidamente un entorno de desarrollo para Vue 3, aprovechando NPM, el gestor de dependencias de Node.js, para automatizar la instalación de librerías y paquetes.</p>

      ---

      <h2 class="subtitle">Creando un Proyecto con Vite</h2>
      <p class="p">Para empezar, necesitarás tener instalado <span style="font-weight: 700;">Node.js</span> en tu sistema, ya que incluye NPM. Una vez que lo tengas, ejecuta el siguiente comando en tu terminal para iniciar un nuevo proyecto de Vue 3:</p>
      <article class="code">
        <div>
          <p class="p">npm create vite@latest</p>
        </div>
      </article>
      <p class="p">Después de ejecutar el comando, la terminal te hará una serie de preguntas para configurar tu proyecto. Puedes seguir las indicaciones para elegir el nombre del proyecto, el framework (selecciona <strong>Vue</strong>) y en este caso <strong>JavaScript</strong>.</p>
      
      ---

      <h2 class="subtitle">Ejecutando el Proyecto</h2>
      <p class="p">Una vez que Vite haya creado los archivos, navega a la carpeta de tu nuevo proyecto y ejecuta los siguientes comandos para instalar las dependencias y arrancar el servidor de desarrollo:</p>
      <article class="code">
        <div>
          <p class="p">cd &lt;nombre-del-proyecto&gt;</p>
        </div>
      </article>
      <article class="code">
        <div>
          <p class="p">npm install</p>
        </div>
      </article>
      <article class="code">
        <div>
          <p class="p">npm run dev</p>
        </div>
      </article>
      <p class="p"> El servidor de desarrollo te dará una dirección URL local (generalmente http://localhost:5173) para que veas tu aplicación en el navegador.</p>
    </section>
  </div>
</template>

<style scoped>
.code {
  background-color: #1f2937;
}
.code p {
  color: white;
  font-weight: 200;
  padding-left: 5%;
  padding-top: 1%;
  padding-bottom: 1%;
}
.father {
  display: flex;
  justify-content: center;
  background-color: #f9fafb; /* bg-gray-50 */
  height: min-content;
}
.content {
  width: 68%;
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
}
strong {
  color: #42b883;
}
</style>

<script setup>
</script>