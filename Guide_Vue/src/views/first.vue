/*
1.Que es vue
2.Requisitos
3.Creación de proyecto
4.Interpolacion
5.Directivas de vue
6.Options Api
7.Composition Api
8.Ciclo de vida de vue
9.Componentes importación
10.Componetizacion Props
11.Creación de un proyecto template quasar
12.Instalar Quasar en un proyecto ya creado
13.Vue router
14.Pinia
15.Pinia-plugin-presistedstate
*/
<template>
  <div class="father">
    <section class="parent">
      <div class="que_es_vue">
        <h3>que es vue</h3>
        <Icon icon="line-md:question" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="requisitos">
        <h3>Requerimientos</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="creacion_de_proyecto">
        <h3>creacion_de_proyecto</h3>
        <Icon icon="gridicons:create" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="interpolacion">
        <h3>interpolacion</h3>
        <Icon icon="codicon:symbol-namespace" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="directivas_de_vue">
        <h3>directivas_de_vue</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="options_api">
        <h3>options_api</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="composition_api">
        <h3>composition_api</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="cilo_de_vida_de_vue">
        <h3>cilo_de_vida_de_vue</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="componentes_importacion">
        <h3>componentes_importacion</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="componetizacion_props">
        <h3>componetizacion_props</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="crear_proyecto_template_quasar">
        <h3>crear_proyecto_template_quasar</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="intalar_quasar_en_un_proyecto_ya_creado">
        <h3>intalar_quasar_en_un_proyecto_ya_creado</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="vue_router">
        <h3>vue_router</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="pinia">
        <h3>pinia</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
      <div class="pinia_plugin_presistedstate">
        <h3>pinia_plugin_presistedstate</h3>
        <Icon icon="pajamas:requirements" style="font-size:30px; vertical-align: start;"></Icon>
      </div>
    </section>
  </div>
</template>

<style scoped>
.father {
  background: #324759;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
}
section {
  display: flex;
  width: 80%;
  background: white;
  justify-content: center;
  height: 80%;
}
div {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #45bf86;
  color: white;
}
.parent {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
}

.que_es_vue {
  border: solid #3f8c68;
  grid-row: span 2 / span 2;
}

.requisitos {
  border: solid #3f8c68;
  grid-row: span 2 / span 2;
}

.creacion_de_proyecto {
  border: solid #3f8c68;
  grid-column: span 2 / span 2;
}

.interpolacion {
  border: solid #3f8c68;
  grid-column: span 2 / span 2;
  grid-column-start: 5;
}

.directivas_de_vue {
  border: solid #3f8c68;
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 2;
}

.options_api {
  border: solid #3f8c68;
  grid-row: span 2 / span 2;
  grid-column-start: 5;
  grid-row-start: 2;
}

.composition_api {
  border: solid #3f8c68;
  grid-row: span 2 / span 2;
  grid-column-start: 6;
  grid-row-start: 2;
}

.cilo_de_vida_de_vue {
  border: solid #3f8c68;
  grid-column: span 2 / span 2;
  grid-row-start: 3;
}

.componentes_importacion {
  border: solid #3f8c68;
  grid-row-start: 4;
}

.componetizacion_props {
  border: solid #3f8c68;
  grid-row-start: 4;
}

.crear_proyecto_template_quasar {
  border: solid #3f8c68;
  grid-column: span 2 / span 2;
  grid-row-start: 4;
}

.intalar_quasar_en_un_proyecto_ya_creado {
  border: solid #3f8c68;
  grid-column: span 2 / span 2;
  grid-column-start: 5;
  grid-row-start: 4;
}

.vue_router {
  border: solid #3f8c68;
  grid-row-start: 5;
}

.pinia {
  border: solid #3f8c68;
  grid-column: span 3 / span 3;
  grid-row-start: 5;
}

.pinia_plugin_presistedstate {
  border: solid #3f8c68;
  grid-column: span 2 / span 2;
  grid-column-start: 5;
  grid-row-start: 5;
}
h3 {
  font-size: 20px;
}
</style>

<script setup>
import { Icon } from "@iconify/vue";
</script>