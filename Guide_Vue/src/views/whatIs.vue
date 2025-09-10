<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Que es vue?</h1>
      <p class="p">
        La palabra
        <strong>Vue</strong> (pronunciado «viú») viene del francés y significa «view» (vista), que es como se le denomina a la parte visual del modelo MVC, parte en la que se centran estos frameworks.
      </p>
      <p class="p">
        Vue es un
        <strong>framework frontend</strong>, es decir, que si vienes de framework del estilo de Laravel (PHP), Ruby on rails (Ruby), Spring (Java) u otros framework de backend, te encontrarás múltiples diferencias. En los últimos años se ha popularizado la creación de aplicaciones de tipo SPA (Single Page Application), que es la categoría donde se encuentra Vue, React, Angular, etc...
      </p>
      <p
        class="p"
      >Vue es un framework que tiene varias características que lo definen principalmente. Si tu proyecto o finalidad encaja con dichas características, Vue será una buena elección para ti. Sin embargo, si no se ajusta a dichas características, quizás sea mejor analizar otros frameworks.</p>
      <p class="p">
        Se trata de un
        <strong>framework progresivo</strong>. Esto significa que es ideal para migrar y adaptar proyectos existentes hechos en otras tecnologías y pasarlos poco a poco a Vue.
      </p>
    </section>
  </div>
</template>

<style scoped>
.father {
  display: flex;
  justify-content: center;
  background-color: #f9fafb; /* bg-gray-50 */
  height: 100vh;
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
