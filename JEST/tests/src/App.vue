<script setup>
import { ref } from "vue";

const count = ref(0);

const texto = ref("");
const estado = ref("inactivo");

function limite() {
  if (texto.value.length > 10) {
    texto.value = texto.value.slice(0, 10);
  }
}
function estados() {
  if (estado.value == "inactivo") {
    estado.value = "activo";
  } else {
    estado.value = "inactivo";
  }
}

/* TO DO LIST */
const nuevaTarea = ref("");
const tareas = ref([]);

function agregarTarea() {
  if (nuevaTarea.value.trim() === "") return;

  tareas.value.push({
    id: Date.now(),
    texto: nuevaTarea.value,
    hecha: false
  });

  nuevaTarea.value = "";
}

function toggleTarea(tarea) {
  tarea.hecha = !tarea.hecha;
}

function eliminarTarea(id) {
  tareas.value = tareas.value.filter(t => t.id !== id);
}
</script>

<template>
  <div>
    <h1 data-test="estadoTexto">{{ estado }}</h1>

    <div class="card">
      <!-- Contador -->
      <button
        data-test="buttonCount"
        type="button"
        @click="count++"
      >
        count is {{ count }}
      </button>

      <!-- Toggle -->
      <button
        data-test="buttonToggle"
        :style="{ background: estado === 'inactivo' ? 'red' : 'green' }"
        type="button"
        @click="estados"
      >
        {{ estado }}
      </button>

      <!-- Input con límite -->
      <input
        data-test="inputText"
        type="text"
        name="textorro"
        placeholder="inserte su nombre"
        v-model="texto"
        @input="limite()"
      />

      <p>{{ texto }}</p>
    </div>

    <!-- TO DO LIST -->
    <div class="todo">
      <h2>To Do List</h2>

      <!-- Input nueva tarea -->
      <input
        data-test="todoInput"
        type="text"
        placeholder="Nueva tarea"
        v-model="nuevaTarea"
        @keyup.enter="agregarTarea"
      />

      <!-- Botón agregar -->
      <button
        data-test="todoAdd"
        @click="agregarTarea"
      >
        Agregar
      </button>

      <!-- Lista -->
      <ul>
        <li
          v-for="tarea in tareas"
          :key="tarea.id"
          data-test="todoItem"
          :style="{ textDecoration: tarea.hecha ? 'line-through' : 'none' }"
        >
          <!-- Toggle tarea -->
          <span
            data-test="todoToggle"
            @click="toggleTarea(tarea)"
            style="cursor: pointer;"
          >
            {{ tarea.texto }}
          </span>

          <!-- Eliminar -->
          <button
            data-test="todoDelete"
            @click="eliminarTarea(tarea.id)"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
