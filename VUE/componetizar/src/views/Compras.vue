<template>
    <div>
        <h1>soy compras</h1>
        <h2>{{ useGeneral.nombre }}</h2>
        <button @click="useGeneral.incrementar()">incremente</button>
    </div>
</template>

<script setup>
import { useGeneralStore } from '../stores/general';

const useGeneral = useGeneralStore()


</script> 