<script setup>
import {ref} from 'vue';
let numero= ref(0)
setInterval(()=>{
numero.value++
},1000)
</script>

<template>
  <h1>{{numero}}</h1>
</template>

<style>
</style>