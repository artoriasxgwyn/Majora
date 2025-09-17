<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Requisitos para tu Proyecto en Vue 3</h1>
      <p class="p">
        Para empezar a desarrollar con Vue, solo necesitas dos cosas principales: un entorno de desarrollo con las herramientas correctas y un buen editor de código. A continuación, te explicamos qué necesitas y por qué.
      </p>

      ---

      <h2 class="subtitle">1. Node.js y NPM</h2>
      <p class="p">
        El requisito fundamental es tener **Node.js** instalado. Node.js es un entorno que permite ejecutar JavaScript fuera del navegador, lo cual es vital para Vue. Al instalarlo, se incluye automáticamente **NPM** (Node Package Manager), que es el gestor de paquetes que usaremos para instalar Vue y todas las librerías necesarias para nuestro proyecto.
      </p>
      <p class="p">
        Puedes verificar si ya los tienes instalados abriendo tu terminal y ejecutando los siguientes comandos. Si ves un número de versión, estás listo.
      </p>
      <article class="code">
        <div>
          <p class="p">node -v</p>
        </div>
      </article>
      <article class="code">
        <div>
          <p class="p">npm -v</p>
        </div>
      </article>
      <p class="p">
        Si alguno de estos comandos no funciona, significa que necesitas instalar Node.js. Puedes descargarlo desde su página web oficial.
      </p>
      

      
      <h2 class="subtitle">2. Editor de Código</h2>
      <p class="p">
        Se recomienda encarecidamente usar un editor de código moderno como **Visual Studio Code**. Es gratuito, tiene muchas funciones y es el editor estándar en la comunidad de Vue.
      </p>
      <p class="p">
        Además, instala la extensión **Volar** para Vue. Volar mejora tu experiencia de desarrollo ofreciéndote:
      </p>
      <ul>
        <li class="p">
          <strong>Resaltado de sintaxis:</strong> Para ver tu código con colores que facilitan la lectura.
        </li>
        <li class="p">
          <strong>Autocompletado inteligente:</strong> Te sugiere código mientras escribes, ahorrándote tiempo y evitando errores.
        </li>
        <li class="p">
          <strong>Análisis de errores:</strong> Te avisa sobre posibles errores en tu código en tiempo real.
        </li>
      </ul>
      <p class="p">
        Con Node.js, NPM, un buen editor y la extensión Volar, tendrás todo lo que necesitas para comenzar tu viaje con Vue.
      </p>
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
  min-height: 100vh;
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
  line-height: 1.5;
}
strong {
  color: #42b883;
}
ul {
  list-style-type: disc;
  padding-left: 2.5rem;
  margin-top: 1rem;
}
li {
  margin-bottom: 0.5rem;
}
</style>

<script setup>
</script>