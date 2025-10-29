<template>
  <div>
    <button @click="props.accionBoton">{{props.textbutton}}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  textbutton: {
    required: true,
    type: String
  },
  accionBoton: {
    type: Function,
    required: true
  }
});
</script>

<style scoped>
button {
  background: green;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  color: white;
}
</style>