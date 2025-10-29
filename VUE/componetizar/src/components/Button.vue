<template>
    <div>
        <button @click="props.accionBoton">{{ props.textoBoton }}</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

onMounted(()=>{
    if (!props.textoBoton){
        throw new Error("El boton no tiene texto");
    }
})

const props = defineProps({
    textoBoton:{
        required:false,
        type:String,
        default:"hola"
    },
    accionBoton:{
        type:Function,
        required:true
    },
    colorBoton:{
        required:true,
        type:String
    }
})


</script>

<style scoped>
button{
    background: v-bind("props.colorBoton");
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    color: white;
}
</style>