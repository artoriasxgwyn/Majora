<script setup>
import { ref } from "vue";
import boton from "./components/button.vue";
const movies = ["hambre", "muerte", "luz", "penumbra", "odio"];
let numero = ref(0);
let condition = true;
let condition2 = true;
let entradaTexto = "pagame boludo";
let name = ref("hotero");
const conditionp = false;
const conditionq = false;
</script>

<template>
  <div>
    <boton ContentButton="hola mami"></boton>
    <h1>{{ numero }}</h1>
    <h1></h1>
    <input type="text" placeholder="hola bro" v-bind:value="entradaTexto" />
    <input type="text" placeholder="hola bro" v-model="name" />
    <h1 v-bind:class="condition ? 'color' : 'color2'">{{name}}</h1>
    <h1 v-bind:class="{color2:condition2,color1:condition}">{{name}}</h1>
    <boton ContentButton="jijija"></boton>
    <div>
      <h1>Directiva v-if</h1>
      <h2 v-if="conditionp">hola</h2>
      <h3 v-else-if="conditionq">tengo hambre</h3>
      <h4 v-else>sapo</h4>
    </div>
    <h1>Renderizar listas</h1>
    <div>
      <h1 v-for="(movie, indexMovie) in movies" :key="movie">
        {{movie}}
        {{indexMovie}}
      </h1>
    </div>
     <div>
      <h1>Renderizar objetos</h1>
      <h1 v-for="(animal, indexAnimal) in animals" :key="animal">
        {{animal.name}}
        {{indexAnimal}}
      </h1>
    </div>
  </div>
</template>

<style scoped>
.color {
  color: green;
  text-align: center;
}

.color1 {
  color: pink;
}

.color2 {
  border: 1px solid green;
}
</style>