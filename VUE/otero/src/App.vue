<script setup>
import Boton from "./components/button.vue";
import Card from "./components/cards.vue";
function hola() {
  alert("oña");
}
</script>

<template>
  <div>
    <h1>componetizacion de botones</h1>
    <Boton textbutton="asdsasa" :accionBoton="hola"></Boton>
    <Card CardTitle="Datos"
      TextButton="boton"
      CardImage="https://i.pinimg.com/736x/df/93/c1/df93c12590bba5bba583cbd6c355b82f.jpg"
      Carddescription="esto es desesperanzador"
      :CardBoton="hola"
    ></Card>
    <button></button>
    <router-view></router-view>
  </div>
</template>
