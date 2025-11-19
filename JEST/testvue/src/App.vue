
<template>
  <div>
    <h1>hola</h1>
 <h2>hola</h2>
 <div v-for="todo in todos" :key="todo.id" data-test="todo">{{todo.text}}</div>
 <!-- <section data-test="todo">{{todos[0].text}}</section> -->
   <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
    <input type="checkbox">
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false
  }
])

const createTodo = () => {
  todos.value.push({
    id: 2,
    text: newTodo.value,
    completed: false
  })
}
//import HelloWorld from './components/HelloWorld.vue'
/*
esto es vue 2 hay que recordar que hay devolver al scope global 
lo que se importa, eso es lo que facilita vue3.2 en su script setup

export default {  
  name: 'App',
  components: {
    HelloWorld
  }
}
*/
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
