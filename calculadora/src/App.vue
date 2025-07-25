<script setup>
import { ref } from "vue";
import boton from "./components/button.vue";
let numero = ref(0);
/*
setInterval(()=>{
numero.value++
},1000)
*/
</script>

<template>
  <div>
    <h1>{{numero}}</h1>
    <boton textButton="hola"></boton>
  </div>
</template>

<style scoped>
</style>