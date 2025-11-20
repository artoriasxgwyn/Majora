<script setup>
import { ref } from "vue";

const count = ref(0);

const texto = ref("");
const estado = ref("inactivo");
function limite() {
  if (texto.value.length > 10) {
    texto.value = "";
  }
}
function estados() {
  if (estado.value == "inactivo") {
    estado.value = "activo";
  } else {
    estado.value = "inactivo";
  }
}
</script>

<template>
  <div>
    <h1>{{estado}}</h1>
    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <button type="button" @click="count--">count is {{ count }}</button>
      <button data-test="button" :style="{ background: estado === 'inactivo' ? 'red' : 'green' }" type="button" @click="estados">{{estado}}</button>
      <button :style="estado =='inactivo'?'background:red':'background:green'" type="button" @click="estados">{{estado}}</button>
      <input type="text" v-if="texto.length >= 10" value="hola" />
      <input
        type="text"
        name="textorro"
        placeholder="inserte su nombre"
        v-model="texto"
        @input="limite()"
      />
      <p>{{texto}}</p>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
    </p>
    <p>
      Learn more about IDE Support for Vue in the
      <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
      >Vue Docs Scaling up Guide</a>.
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
