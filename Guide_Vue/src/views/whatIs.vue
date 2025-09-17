<template>
  <div class="father">
    <section class="content">
      <h1 class="title">¿Qué es Vue?</h1>
      <p class="p">
        La palabra <strong>Vue</strong> (pronunciado «viú») viene del francés y significa «view» (vista), la parte de la aplicación que los usuarios ven e interactúan.
      </p>
      
      ---
      
      <h2 class="subtitle">Vue: Un framework frontend</h2>
      <p class="p">
        Vue.js es un <strong>framework de JavaScript</strong> para el **frontend**. En términos sencillos, es una herramienta que nos ayuda a crear la parte visual de una página web de manera organizada y eficiente. A diferencia de un sitio web tradicional, las aplicaciones construidas con Vue se conocen como <strong>SPA</strong> (Single Page Application), que significa que toda la aplicación se carga en una sola página, ofreciendo una experiencia rápida y fluida sin recargar el navegador.
      </p>
      
      <p class="p">
        Una de las características más importantes de Vue es que es un <strong>framework progresivo</strong>. Esto significa que puedes usarlo para proyectos pequeños, como añadir una funcionalidad interactiva a una página ya existente, o para construir aplicaciones web a gran escala. Vue es muy flexible y se adapta a tus necesidades.
      </p>
      
      ---
      
      <h2 class="subtitle">¿Por qué usar Vue para empezar?</h2>
      <p class="p">
        Vue se ha vuelto muy popular para los principiantes por varias razones:
      </p>
      <ul>
        <li class="p">
          <strong>Curva de Aprendizaje Sencilla:</strong> Es fácil de entender desde el principio, especialmente si ya sabes algo de HTML, CSS y JavaScript.
        </li>
        <li class="p">
          <strong>Rendimiento:</strong> Vue es ligero y rápido, lo que hace que las aplicaciones se sientan ágiles y responsivas.
        </li>
        <li class="p">
          <strong>Comunidad y Documentación:</strong> Tiene una comunidad activa y una documentación oficial excelente, lo que facilita encontrar ayuda y recursos.
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
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
  margin-top: 2rem;
}
.p {
  font-size: 120%;
  font-weight: 550;
  letter-spacing: -0.025em;
  color: #1f2937;
  line-height: 1.5;
}
ul {
  list-style-type: disc;
  padding-left: 2rem;
}
strong {
  color: #42b883;
}
</style>

<script setup>
</script>