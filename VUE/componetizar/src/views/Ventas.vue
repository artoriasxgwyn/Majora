<template>
    <div>
        <h1>soy ventas</h1>
        <button @click="useGeneral.nombreMayuscula">Modificar nombre</button>
        <button @click="useGeneral.decrementar()">decrementar</button>
    </div>
</template>
<script setup>
import { useGeneralStore } from '../stores/general';

const useGeneral = useGeneralStore()


</script> 