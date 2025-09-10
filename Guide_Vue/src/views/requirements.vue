<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Requisitos para un Proyecto en Vue 3</h1>
      <p
        class="p"
      >Para empezar con un proyecto en Vue, necesitas un entorno de desarrollo con las herramientas básicas del ecosistema JavaScript. Una vez que tengas todo configurado, puedes usar Vite, la herramienta recomendada, para crear tu proyecto de manera rápida y eficiente.</p>
      
      ---
      
      <h2 class="subtitle"> Requisitos Previos</h2>
      <p class="p">El requisito fundamental es tener instalado <strong>Node.js</strong> en tu sistema. Node.js es un entorno de ejecución de JavaScript y, al instalarlo, se incluye automáticamente <strong>NPM</strong> (Node Package Manager), que es el gestor de paquetes que se utiliza para instalar Vue y todas sus librerías. Puedes verificar si ya los tienes instalados ejecutando estos comandos en tu terminal:</p>
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
      <p class="p">Además, se recomienda encarecidamente usar un editor de código moderno como <strong>Visual Studio Code</strong> con extensiones especializadas como <strong>Volar</strong> para un desarrollo más fluido.</p>
      
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
}
strong {
  color: #42b883;
}
</style>

<script setup>
</script>