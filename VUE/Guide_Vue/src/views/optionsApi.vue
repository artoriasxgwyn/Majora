<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Options API</h1>
      <p class="p">
        La <strong>Options API</strong> es el estilo original de Vue para definir componentes. Organiza la lógica del componente en varias opciones como <code>data</code>, <code>methods</code>, <code>computed</code>, etc. Es muy intuitiva para desarrolladores que vienen de la programación orientada a objetos.
      </p>

      <hr />

      <h2 class="subtitle">¿Qué es la Options API?</h2>
      <p class="p">
        En la Options API, definimos un componente usando un objeto de opciones. Cada opción tiene un propósito específico:
      </p>
      
      <ul>
        <li class="p"><strong>data:</strong> Define las variables reactivas del componente</li>
        <li class="p"><strong>methods:</strong> Contiene las funciones del componente</li>
        <li class="p"><strong>computed:</strong> Propiedades calculadas que se actualizan automáticamente</li>
        <li class="p"><strong>watch:</strong> Observa cambios en las variables y ejecuta código</li>
        <li class="p"><strong>lifecycle hooks:</strong> Funciones que se ejecutan en momentos específicos del ciclo de vida</li>
      </ul>

      <hr />

      <h2 class="subtitle">Estructura Básica</h2>
      <p class="p">
        Un componente usando Options API se estructura de la siguiente manera:
      </p>

      <div class="code-block">
        <h3 class="code-title">Código de Ejemplo</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;{{ titulo }}&lt;/h1&gt;
    &lt;p&gt;Contador: {{ contador }}&lt;/p&gt;
    &lt;button @click="incrementar"&gt;Incrementar&lt;/button&gt;
    &lt;p&gt;Doble: {{ dobleContador }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'MiComponente',
  data() {
    return {
      titulo: 'Mi Componente',
      contador: 0
    }
  },
  computed: {
    dobleContador() {
      return this.contador * 2;
    }
  },
  methods: {
    incrementar() {
      this.contador++;
    }
  },
  mounted() {
    console.log('Componente montado');
  }
}
&lt;/script&gt;
        </code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Ejemplo Completo</h2>
      <p class="p">
        Aquí tienes un ejemplo completo de un componente usando Options API:
      </p>

      <div class="example">
        <h3 class="example-title">Lista de Tareas</h3>
        <div class="p">
          <input v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="Nueva tarea" class="demo-input">
          <button @click="agregarTarea" class="demo-button">Agregar</button>
          
          <ul class="tareas-lista">
            <li v-for="(tarea, index) in tareasFiltradas" :key="index" class="tarea-item">
              <input type="checkbox" v-model="tarea.completada">
              <span :class="{ completada: tarea.completada }">{{ tarea.texto }}</span>
              <button @click="eliminarTarea(index)" class="demo-button small">Eliminar</button>
            </li>
          </ul>
          
          <div class="filtros">
            <button @click="filtro = 'todas'" class="demo-button small">Todas ({{ totalTareas }})</button>
            <button @click="filtro = 'pendientes'" class="demo-button small">Pendientes ({{ tareasPendientes }})</button>
            <button @click="filtro = 'completadas'" class="demo-button small">Completadas ({{ tareasCompletadas }})</button>
          </div>
        </div>
      </div>

      </section>
  </div>
</template>

<script>
export default {
  name: 'OptionsApi',
  data() {
    return {
      nombre: '',
      apellido: '',
      busqueda: '',
      cargando: false,
      nuevaTarea: '',
      tareas: [
        { texto: 'Aprender Options API', completada: true },
        { texto: 'Practicar con ejemplos', completada: false },
        { texto: 'Crear componentes', completada: false }
      ],
      filtro: 'todas'
    }
  },
  computed: {
    nombreCompleto() {
      return this.nombre + ' ' + this.apellido;
    },
    tareasFiltradas() {
      switch(this.filtro) {
        case 'pendientes': return this.tareas.filter(t => !t.completada);
        case 'completadas': return this.tareas.filter(t => t.completada);
        default: return this.tareas;
      }
    },
    totalTareas() {
      return this.tareas.length;
    },
    tareasPendientes() {
      return this.tareas.filter(t => !t.completada).length;
    },
    tareasCompletadas() {
      return this.tareas.filter(t => t.completada).length;
    }
  },
  watch: {
    busqueda(nuevoValor) {
      if (nuevoValor) {
        this.cargando = true;
        setTimeout(() => {
          this.cargando = false;
        }, 500);
      }
    }
  },
  methods: {
    agregarTarea() {
      if (this.nuevaTarea.trim()) {
        this.tareas.push({
          texto: this.nuevaTarea.trim(),
          completada: false
        });
        this.nuevaTarea = '';
      }
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
    }
  },
  mounted() {
    console.log('Componente Options API montado');
  }
}
</script>

<style scoped>
.father {
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
  min-height: 100vh;
}
.content {
  width: 80%;
  max-width: 900px; /* Añadido para mejor legibilidad en pantallas grandes */
  padding-bottom: 2rem;
}
.title {
  font-size: 3rem; /* Ajustado para mejor responsive */
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #1f2937;
}
.subtitle {
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #1f2937;
  margin-top: 2rem;
}
.subtitle-sm {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #1f2937;
  margin-top: 1.5rem;
}
.p {
  font-size: 1.125rem; /* 18px */
  font-weight: 400; /* 550 no es un valor estándar */
  color: #374151; /* Ligeramente más suave para el texto */
  line-height: 1.6;
}
strong {
  color: #42b883;
  font-weight: 600;
}
hr {
  border: 0;
  height: 1px;
  background-color: #e5e7eb;
  margin: 2rem 0;
}
.code {
  background-color: #1f2937;
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  overflow-x: auto; /* Para que el código no se desborde */
}
/* La etiqueta <pre> preserva los espacios y saltos de línea, haciendo esto más limpio */
pre.code code {
  white-space: pre;
}

.code-block {
  margin-top: 2rem;
}
.code-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}
.example {
  background-color: #f3f4f6;
  border-left: 4px solid #42b883;
  padding: 1.5rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
}
.example-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-top: 0;
}
.demo-input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.demo-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;
}
.demo-button:hover {
  background-color: #359f72;
}
.demo-button.small {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
.tareas-lista {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}
.tarea-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}
.tarea-item span {
  flex-grow: 1; /* Para que el texto ocupe el espacio disponible */
}
.tarea-item input[type="checkbox"] {
  margin-right: 0.5rem;
}
.completada {
  text-decoration: line-through;
  color: #6b7280;
}
.filtros {
  margin-top: 1rem;
}
ul {
  list-style-type: disc;
  padding-left: 2rem;
}
li {
  margin-bottom: 0.5rem;
}
</style>