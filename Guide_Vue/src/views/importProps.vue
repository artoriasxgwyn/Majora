[file name]: componentProps.vue
[file content begin]
<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Props y Componetización</h1>
      <p class="p">
        Los <strong>props</strong> son la forma en que los componentes Vue se comunican entre sí. Permiten pasar datos de un componente padre a un componente hijo, haciendo posible la creación de componentes reutilizables y modulares.
      </p>

      <hr />

      <h2 class="subtitle">¿Qué son los Props?</h2>
      <p class="p">
        Los props son <strong>atributos personalizados</strong> que puedes registrar en un componente. Cuando un valor es pasado a un prop, se convierte en una propiedad de esa instancia del componente.
      </p>

      <div class="example">
        <h3 class="example-title">Analogía Simple</h3>
        <div class="p">
          <p>Piensa en los props como <strong>parámetros de una función</strong>:</p>
          <div class="analogy">
            <div class="analogy-item">
              <h4>Función JavaScript</h4>
              <pre class="code-small"><code>function Saludar(nombre, edad) {
  return `Hola ${nombre}, tienes ${edad} años`;
}

Saludar("Ana", 25); // ← Parámetros</code></pre>
            </div>
            <div class="analogy-item">
              <h4>Componente Vue</h4>
              <pre class="code-small"><code>&lt;Saludador 
  nombre="Ana" 
  :edad="25" 
/&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Sintaxis Básica de Props</h2>

      <h3 class="subtitle-sm">1. Declaración de Props en el Componente Hijo</h3>

      <div class="code-block">
        <h3 class="code-title">Composition API</h3>
        <pre class="code"><code>
&lt;!-- Componente Hijo: UserCard.vue --&gt;
&lt;template&gt;
  &lt;div class="user-card"&gt;
    &lt;h3&gt;&lbrace;&lbrace; nombre &rbrace;&rbrace;&lt;/h3&gt;
    &lt;p&gt;Edad: &lbrace;&lbrace; edad &rbrace;&rbrace; años&lt;/p&gt;
    &lt;p&gt;Email: &lbrace;&lbrace; email &rbrace;&rbrace;&lt;/p&gt;
    &lt;p v-if="esPremium" class="premium"&gt;⭐ Usuario Premium&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Definir props
defineProps({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    default: 18
  },
  email: {
    type: String,
    required: true
  },
  esPremium: {
    type: Boolean,
    default: false
  }
})
&lt;/script&gt;

&lt;style scoped&gt;
.user-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
}
.premium {
  color: gold;
  font-weight: bold;
}
&lt;/style&gt;
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;!-- Mismo template --&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  props: {
    nombre: {
      type: String,
      required: true
    },
    edad: {
      type: Number,
      default: 18
    },
    email: {
      type: String,
      required: true
    },
    esPremium: {
      type: Boolean,
      default: false
    }
  }
}
&lt;/script&gt;
        </code></pre>
      </div>

      <h3 class="subtitle-sm">2. Uso del Componente con Props</h3>

      <div class="code-block">
        <h3 class="code-title">Componente Padre</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;Lista de Usuarios&lt;/h2&gt;
    
    &lt;!-- Pasar props estáticos --&gt;
    &lt;UserCard 
      nombre="Ana García" 
      :edad="25" 
      email="ana@example.com" 
      :es-premium="true" 
    /&gt;
    
    &lt;!-- Pasar props dinámicos --&gt;
    &lt;UserCard 
      :nombre="usuario.nombre" 
      :edad="usuario.edad" 
      :email="usuario.email" 
      :es-premium="usuario.premium" 
    /&gt;
    
    &lt;!-- Usar v-for para múltiples instancias --&gt;
    &lt;UserCard 
      v-for="usuario in usuarios" 
      :key="usuario.id" 
      :nombre="usuario.nombre" 
      :edad="usuario.edad" 
      :email="usuario.email" 
      :es-premium="usuario.premium" 
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import UserCard from '@/components/UserCard.vue'
import { ref } from 'vue'

const usuario = ref({
  nombre: 'Carlos López',
  edad: 30,
  email: 'carlos@example.com',
  premium: false
})

const usuarios = ref([
  {
    id: 1,
    nombre: 'María Rodríguez',
    edad: 28,
    email: 'maria@example.com',
    premium: true
  },
  {
    id: 2,
    nombre: 'Pedro Martínez',
    edad: 35,
    email: 'pedro@example.com',
    premium: false
  }
])
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: Tarjetas de Usuario</h3>
        <div class="props-demo">
          <UsuarioCard 
            nombre="Ana García" 
            :edad="25" 
            email="ana@example.com" 
            :es-premium="true" 
          />
          <UsuarioCard 
            :nombre="usuarioDemo.nombre" 
            :edad="usuarioDemo.edad" 
            :email="usuarioDemo.email" 
            :es-premium="usuarioDemo.premium" 
          />
          <button @click="cambiarUsuario" class="demo-button">Cambiar Usuario</button>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Tipos de Props y Validación</h2>

      <div class="code-block">
        <h3 class="code-title">Validación Completa de Props</h3>
        <pre class="code"><code>
&lt;script setup&gt;
defineProps({
  // Tipo básico
  titulo: String,
  
  // Múltiples tipos posibles
  id: [String, Number],
  
  // Requerido con tipo específico
  nombre: {
    type: String,
    required: true
  },
  
  // Valor por defecto
  edad: {
    type: Number,
    default: 18
  },
  
  // Validación personalizada
  puntuacion: {
    type: Number,
    validator: (value) => {
      return value >= 0 && value <= 100
    }
  },
  
  // Valor por defecto como función
  usuarios: {
    type: Array,
    default: () => []
  },
  
  // Objeto con valor por defecto
  config: {
    type: Object,
    default: () => ({
      color: 'blue',
      tamaño: 'medio'
    })
  },
  
  // Función como prop
  onComplete: {
    type: Function,
    default: () => {}
  }
})
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: Validación de Props</h3>
        <div class="p">
          <ProductoCard 
            :nombre="producto.nombre"
            :precio="producto.precio"
            :categoria="producto.categoria"
            :en-stock="producto.enStock"
            :calificacion="producto.calificacion"
          />
          <div class="controls">
            <input v-model="producto.nombre" placeholder="Nombre del producto" class="demo-input">
            <input v-model.number="producto.precio" type="number" placeholder="Precio" class="demo-input">
            <select v-model="producto.categoria" class="demo-input">
              <option value="electronica">Electrónica</option>
              <option value="ropa">Ropa</option>
              <option value="hogar">Hogar</option>
            </select>
            <label>
              <input type="checkbox" v-model="producto.enStock"> En stock
            </label>
            <input v-model.number="producto.calificacion" type="range" min="1" max="5" class="demo-slider">
            <span>Calificación: {{ producto.calificacion }}/5</span>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Props vs Data</h2>

      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Característica</th>
              <th>Props</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Origen</strong></td>
              <td>Pasan del componente padre</td>
              <td>Internos del componente</td>
            </tr>
            <tr>
              <td><strong>Mutabilidad</strong></td>
              <td>Read-only (en el hijo)</td>
              <td>Mutable</td>
            </tr>
            <tr>
              <td><strong>Flujo de datos</strong></td>
              <td>Padre → Hijo</td>
              <td>Interno del componente</td>
            </tr>
            <tr>
              <td><strong>Uso principal</strong></td>
              <td>Comunicación entre componentes</td>
              <td>Estado interno del componente</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 class="subtitle">Props Avanzados</h2>

      <h3 class="subtitle-sm">1. Props con Objetos y Arrays</h3>

      <div class="code-block">
        <h3 class="code-title">Pasar objetos complejos</h3>
        <pre class="code"><code>
&lt;!-- Componente Padre --&gt;
&lt;template&gt;
  &lt;PerfilUsuario :usuario="usuarioCompleto" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const usuarioCompleto = {
  nombre: 'Ana García',
  edad: 25,
  direccion: {
    ciudad: 'Madrid',
    pais: 'España'
  },
  habilidades: ['Vue.js', 'JavaScript', 'CSS']
}
&lt;/script&gt;

&lt;!-- Componente Hijo: PerfilUsuario.vue --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;&lbrace;&lbrace; usuario.nombre &rbrace;&rbrace;&lt;/h3&gt;
    &lt;p&gt;Ciudad: &lbrace;&lbrace; usuario.direccion.ciudad &rbrace;&rbrace;&lt;/p&gt;
    &lt;ul&gt;
      &lt;li v-for="habilidad in usuario.habilidades"&gt;
        &lbrace;&lbrace; habilidad &rbrace;&rbrace;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
defineProps({
  usuario: {
    type: Object,
    required: true
  }
})
&lt;/script&gt;
        </code></pre>
      </div>

      <h3 class="subtitle-sm">2. v-bind con Objetos</h3>

      <div class="code-block">
        <h3 class="code-title">Pasar múltiples props con v-bind</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;!-- En lugar de esto --&gt;
  &lt;UserCard 
    :nombre="usuario.nombre" 
    :edad="usuario.edad" 
    :email="usuario.email" 
  /&gt;
  
  &lt;!-- Puedes hacer esto --&gt;
  &lt;UserCard v-bind="usuario" /&gt;
  
  &lt;!-- O incluso combinar --&gt;
  &lt;UserCard v-bind="usuario" :es-premium="true" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const usuario = {
  nombre: 'Ana García',
  edad: 25,
  email: 'ana@example.com'
}
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: v-bind con Objetos</h3>
        <div class="p">
          <PerfilUsuario v-bind="usuarioCompleto" />
          <button @click="actualizarPerfil" class="demo-button">Actualizar Perfil</button>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Patrones de Componetización</h2>

      <h3 class="subtitle-sm">1. Componente Contenedor vs Presentacional</h3>

      <div class="code-block">
        <h3 class="code-title">Patrón Contenedor/Presentacional</h3>
        <pre class="code"><code>
&lt;!-- Componente Presentacional: UserList.vue --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;&lbrace;&lbrace; titulo &rbrace;&rbrace;&lt;/h3&gt;
    &lt;UserCard 
      v-for="usuario in usuarios" 
      :key="usuario.id" 
      v-bind="usuario" 
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
defineProps({
  titulo: String,
  usuarios: Array
})
&lt;/script&gt;

&lt;!-- Componente Contenedor: UserManagement.vue --&gt;
&lt;template&gt;
  &lt;UserList 
    titulo="Gestión de Usuarios" 
    :usuarios="usuariosFiltrados" 
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const usuariosFiltrados = computed(() => {
  return userStore.usuarios.filter(u => u.activo)
})
&lt;/script&gt;
        </code></pre>
      </div>

      <h3 class="subtitle-sm">2. Componentes con Slots</h3>

      <div class="code-block">
        <h3 class="code-title">Combinación de Props y Slots</h3>
        <pre class="code"><code>
&lt;!-- Componente: CardContainer.vue --&gt;
&lt;template&gt;
  &lt;div class="card" :class="`card-${tipo}`"&gt;
    &lt;div class="card-header"&gt;
      &lt;h3&gt;&lbrace;&lbrace; titulo &rbrace;&rbrace;&lt;/h3&gt;
      &lt;slot name="header"&gt;&lt;/slot&gt;
    &lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;slot&gt;Contenido por defecto&lt;/slot&gt;
    &lt;/div&gt;
    &lt;div class="card-footer"&gt;
      &lt;slot name="footer"&gt;&lt;/slot&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
defineProps({
  titulo: String,
  tipo: {
    type: String,
    default: 'default'
  }
})
&lt;/script&gt;

&lt;!-- Uso --&gt;
&lt;CardContainer titulo="Mi Tarjeta" tipo="success"&gt;
  &lt;template #header&gt;
    &lt;button&gt;Editar&lt;/button&gt;
  &lt;/template&gt;
  
  &lt;p&gt;Contenido personalizado aquí&lt;/p&gt;
  
  &lt;template #footer&gt;
    &lt;span&gt;Footer personalizado&lt;/span&gt;
  &lt;/template&gt;
&lt;/CardContainer&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: Card con Slots y Props</h3>
        <div class="p">
          <CardContainer titulo="Tarjeta de Ejemplo" tipo="success">
            <template #header>
              <button class="demo-button small">⭐ Destacado</button>
            </template>
            
            <p>Este es el contenido principal de la tarjeta.</p>
            <p>Combina <strong>props</strong> para configuración y <strong>slots</strong> para contenido.</p>
            
            <template #footer>
              <span class="footer-text">Creado con Vue.js</span>
            </template>
          </CardContainer>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Mejores Prácticas</h2>
      <ul>
        <li class="p"><strong>Props inmutables:</strong> No modificar props en el componente hijo</li>
        <li class="p"><strong>Validación:</strong> Siempre validar props importantes</li>
        <li class="p"><strong>Nomenclatura:</strong> Usar camelCase en JavaScript y kebab-case en templates</li>
        <li class="p"><strong>Documentación:</strong> Documentar props complejos</li>
        <li class="p"><strong>Default values:</strong> Proporcionar valores por defecto apropiados</li>
        <li class="p"><strong>Props esenciales:</strong> Marcar como required los props críticos</li>
      </ul>

    </section>
  </div>
</template>

<script>
// Componentes de demostración
const UsuarioCard = {
  template: `
    <div class="usuario-card-demo">
      <h3>{{ nombre }}</h3>
      <p>Edad: {{ edad }} años</p>
      <p>Email: {{ email }}</p>
      <p v-if="esPremium" class="premium-demo">⭐ Usuario Premium</p>
      <p v-else class="standard">Usuario Estándar</p>
    </div>
  `,
  props: {
    nombre: { type: String, required: true },
    edad: { type: Number, default: 18 },
    email: { type: String, required: true },
    esPremium: { type: Boolean, default: false }
  }
}

const ProductoCard = {
  template: `
    <div class="producto-card-demo" :class="{ 'sin-stock': !enStock }">
      <h4>{{ nombre }}</h4>
      <p class="precio">${{ precio }}</p>
      <p class="categoria">Categoría: {{ categoria }}</p>
      <p class="stock" :class="{ disponible: enStock, 'no-disponible': !enStock }">
        {{ enStock ? '✅ En stock' : '❌ Sin stock' }}
      </p>
      <div class="calificacion">
        <span v-for="n in 5" :key="n" class="estrella" :class="{ activa: n <= calificacion }">
          ★
        </span>
      </div>
    </div>
  `,
  props: {
    nombre: { type: String, default: 'Producto' },
    precio: { type: Number, default: 0 },
    categoria: { type: String, default: 'general' },
    enStock: { type: Boolean, default: true },
    calificacion: {
      type: Number,
      default: 3,
      validator: (value) => value >= 1 && value <= 5
    }
  }
}

const PerfilUsuario = {
  template: `
    <div class="perfil-demo">
      <h4>{{ nombre }}</h4>
      <p>Edad: {{ edad }}</p>
      <p>Email: {{ email }}</p>
      <p>Ciudad: {{ direccion.ciudad }}</p>
      <div class="habilidades">
        <span v-for="habilidad in habilidades" :key="habilidad" class="habilidad">
          {{ habilidad }}
        </span>
      </div>
    </div>
  `,
  props: {
    nombre: String,
    edad: Number,
    email: String,
    direccion: {
      type: Object,
      default: () => ({ ciudad: '', pais: '' })
    },
    habilidades: {
      type: Array,
      default: () => []
    }
  }
}

const CardContainer = {
  template: `
    <div class="card-container-demo" :class="'tipo-' + tipo">
      <div class="card-header-demo">
        <h3>{{ titulo }}</h3>
        <slot name="header"></slot>
      </div>
      <div class="card-body-demo">
        <slot>Contenido por defecto</slot>
      </div>
      <div class="card-footer-demo">
        <slot name="footer"></slot>
      </div>
    </div>
  `,
  props: {
    titulo: { type: String, required: true },
    tipo: { type: String, default: 'default' }
  }
}
</script>

<script setup>
import { ref, reactive } from 'vue'

// Estado para las demos
const usuarioDemo = ref({
  nombre: 'Carlos López',
  edad: 30,
  email: 'carlos@example.com',
  premium: false
})

const producto = ref({
  nombre: 'Laptop Gaming',
  precio: 1200,
  categoria: 'electronica',
  enStock: true,
  calificacion: 4
})

const usuarioCompleto = reactive({
  nombre: 'Ana García',
  edad: 25,
  email: 'ana@example.com',
  direccion: {
    ciudad: 'Madrid',
    pais: 'España'
  },
  habilidades: ['Vue.js', 'JavaScript', 'CSS', 'HTML']
})

// Métodos
const cambiarUsuario = () => {
  usuarioDemo.value = {
    nombre: 'María Rodríguez',
    edad: Math.floor(Math.random() * 20) + 20,
    email: 'maria@example.com',
    premium: !usuarioDemo.value.premium
  }
}

const actualizarPerfil = () => {
  usuarioCompleto.edad += 1
  usuarioCompleto.habilidades.push(`Habilidad ${usuarioCompleto.habilidades.length + 1}`)
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
  max-width: 900px;
  padding-bottom: 2rem;
}
.title {
  font-size: 3rem;
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
  font-size: 1.125rem;
  font-weight: 400;
  color: #374151;
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
  overflow-x: auto;
}
.code-small {
  background-color: #1f2937;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
}
pre.code code {
  white-space: pre;
  color: #e5e7eb;
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

/* Demo Styles */
.props-demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

.usuario-card-demo {
  border: 2px solid #42b883;
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
  min-width: 250px;
}

.premium-demo {
  color: #f59e0b;
  font-weight: bold;
}

.standard {
  color: #6b7280;
}

.producto-card-demo {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
  margin: 1rem 0;
}

.producto-card-demo.sin-stock {
  opacity: 0.6;
  background-color: #f3f4f6;
}

.precio {
  font-size: 1.5rem;
  font-weight: bold;
  color: #10b981;
}

.categoria {
  text-transform: capitalize;
}

.stock.disponible {
  color: #10b981;
}

.stock.no-disponible {
  color: #ef4444;
}

.calificacion {
  margin-top: 0.5rem;
}

.estrella {
  color: #d1d5db;
  font-size: 1.2rem;
}

.estrella.activa {
  color: #f59e0b;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.demo-input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  max-width: 300px;
}

.demo-slider {
  width: 200px;
}

.demo-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  margin: 0.5rem 0;
}

.demo-button:hover {
  background-color: #359f72;
}

.demo-button.small {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
}

.perfil-demo {
  border: 2px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
  margin: 1rem 0;
}

.habilidades {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.habilidad {
  background: #e0e7ff;
  color: #4f46e5;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.8rem;
}

.card-container-demo {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  background: white;
}

.card-container-demo.tipo-success {
  border-color: #10b981;
}

.card-header-demo {
  background: #f3f4f6;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body-demo {
  padding: 1rem;
}

.card-footer-demo {
  background: #f9fafb;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
}

.footer-text {
  color: #6b7280;
  font-size: 0.8rem;
}

/* Tabla de comparación */
.comparison-table {
  overflow-x: auto;
  margin: 2rem 0;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  border: 1px solid #e5e7eb;
  padding: 1rem;
  text-align: left;
}

.comparison-table th {
  background: #f3f4f6;
  font-weight: 600;
}

.comparison-table tr:nth-child(even) {
  background: #f9fafb;
}

/* Analogía */
.analogy {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1rem 0;
}

.analogy-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.analogy-item h4 {
  margin: 0 0 0.5rem 0;
  color: #42b883;
}

ul {
  list-style-type: disc;
  padding-left: 2rem;
}

li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .content {
    width: 95%;
  }
  .analogy {
    grid-template-columns: 1fr;
  }
  .controls {
    align-items: flex-start;
  }
  .demo-input {
    max-width: 100%;
  }
}
</style>
[file content end]