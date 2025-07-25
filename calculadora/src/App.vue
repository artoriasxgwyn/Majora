<script setup>
import { ref } from "vue";
import boton from "./components/button.vue";
let numero = ref(0);
let condition = false;
let entradaTexto="pagame boludo"
</script>

<template>
  <div>
    <boton ContentButton="hola mami"></boton>
    <h1>{{ numero }}</h1>
  <h1 ></h1>
    <input type="text" placeholder="hola bro" :value="entradaTexto">
    <input type="text" placeholder="hola bro" v-model="hola">
    <h1 v-bind:class="condition ? 'color' : 'color2'">por que debo intentarlo?</h1>
    <boton ContentButton="jijija"></boton>
  </div>
</template>

<style scoped>
.color {
  color: green;
}

.color2 {
  color: red;
}
</style>