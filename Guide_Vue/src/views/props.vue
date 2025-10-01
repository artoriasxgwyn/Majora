<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Props y Componentización</h1>
      <p class="p">
        Los <strong>props</strong> son atributos personalizados que permiten pasar datos de componentes padres a componentes hijos. Son fundamentales para crear componentes reutilizables en Vue.js.
      </p>

      <hr />

      <h2 class="subtitle">¿Qué son los Props?</h2>
      <p class="p">
        Los props son la forma principal de comunicación entre componentes en Vue. Permiten que los componentes padres pasen datos a sus componentes hijos, manteniendo un flujo de datos unidireccional.
      </p>

      <div class="example">
        <h3 class="example-title">Flujo de Props</h3>
        <div class="flow-diagram">
          <div class="component parent">
            <h4>Componente Padre</h4>
            <div class="data-flow">
              <span class="data">datos</span>
              <span class="arrow">↓</span>
              <code>&lt;MiComponente :prop="valor" /&gt;</code>
            </div>
          </div>
          <div class="component child">
            <h4>Componente Hijo</h4>
            <div class="data-flow">
              <code>defineProps({'{'} prop: Type {'}'})</code>
              <span class="arrow">↓</span>
              <span class="data">{{ prop }}</span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Sintaxis Básica</h2>

      <h3 class="subtitle-sm">Declaración de Props en el Componente Hijo</h3>

      <div class="code-block">
        <h3 class="code-title">Composition API (Recomendado)</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div class="user-card"&gt;
    &lt;h3&gt;{{ name }}&lt;/h3&gt;
    &lt;p&gt;Edad: {{ age }}&lt;/p&gt;
    &lt;p&gt;Email: {{ email }}&lt;/p&gt;
    &lt;p v-if="isPremium" class="premium"&gt;⭐ Premium&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Definir props con defineProps
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 18
  },
  email: {
    type: String,
    required: true
  },
  isPremium: {
    type: Boolean,
    default: false
  }
})
&lt;/script&gt;
        </code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Options API</h3>
        <pre class="code"><code>
&lt;script&gt;
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 18
    },
    email: {
      type: String,
      required: true
    },
    isPremium: {
      type: Boolean,
      default: false
    }
  }
}
&lt;/script&gt;
        </code></pre>
      </div>

      <h3 class="subtitle-sm">Uso en Componente Padre</h3>

      <div class="code-block">
        <h3 class="code-title">Pasando Props al Componente Hijo</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- Props estáticos --&gt;
    &lt;UserCard 
      name="Ana García" 
      :age="25" 
      email="ana@example.com" 
      :is-premium="true" 
    /&gt;
    
    &lt;!-- Props dinámicos --&gt;
    &lt;UserCard 
      :name="user.name" 
      :age="user.age" 
      :email="user.email" 
      :is-premium="user.isPremium" 
    /&gt;
    
    &lt;!-- Múltiples instancias --&gt;
    &lt;UserCard 
      v-for="user in users" 
      :key="user.id" 
      :name="user.name" 
      :age="user.age" 
      :email="user.email" 
      :is-premium="user.isPremium" 
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: Tarjetas de Usuario</h3>
        <div class="demo-container">
          <UserCard 
            name="Ana García" 
            :age="25" 
            email="ana@example.com" 
            :is-premium="true" 
          />
          <UserCard 
            :name="demoUser.name" 
            :age="demoUser.age" 
            :email="demoUser.email" 
            :is-premium="demoUser.isPremium" 
          />
          <button @click="togglePremium" class="demo-button">
            {{ demoUser.isPremium ? 'Quitar Premium' : 'Hacer Premium' }}
          </button>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Tipos y Validación de Props</h2>

     <div class="code-block">
  <h3 class="code-title">Validación Completa de Props</h3>
  <pre class="code"><code>
&lt;script setup&gt;
defineProps(&lbrace;
  // Tipo básico
  title: String,
  
  // Múltiples tipos posibles
  id: [String, Number],
  
  // Requerido con validación
  username: &lbrace;
    type: String,
    required: true,
    validator: (value) =&gt; value.length &gt;= 3
  &rbrace;,
  
  // Valor por defecto
  score: &lbrace;
    type: Number,
    default: 0
  &rbrace;,
  
  // Validación personalizada
  rating: &lbrace;
    type: Number,
    validator: (value) =&gt; value &gt;= 1 &amp;&amp; value &lt;= 5
  &rbrace;,
  
  // Array con valor por defecto
  tags: &lbrace;
    type: Array,
    default: () =&gt; []
  &rbrace;,
  
  // Objeto con valor por defecto
  config: &lbrace;
    type: Object,
    default: () =&gt; (&lbrace;
      color: &apos;blue&apos;,
      size: &apos;medium&apos;
    &rbrace;)
  &rbrace;,
  
  // Función como prop
  onSuccess: &lbrace;
    type: Function,
    default: () =&gt; &lbrace;&rbrace;
  &rbrace;
&rbrace;)
&lt;/script&gt;
  </code></pre>
</div>


      <div class="example">
        <h3 class="example-title">Demo: Producto con Validación</h3>
        <div class="demo-container">
          <ProductCard 
            :product="currentProduct"
          />
          <div class="controls">
            <input v-model="currentProduct.name" placeholder="Nombre" class="demo-input">
            <input v-model.number="currentProduct.price" type="number" placeholder="Precio" class="demo-input">
            <input v-model.number="currentProduct.rating" type="range" min="1" max="5" class="demo-slider">
            <span>Calificación: {{ currentProduct.rating }}/5</span>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Props Reactivos vs No Reactivos</h2>

      <div class="code-block">
        <h3 class="code-title">Diferencia en el Comportamiento</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- No reactivo (string estático) --&gt;
    &lt;MyComponent static-prop="valor estático" /&gt;
    
    &lt;!-- Reactivo (vinculado a variable) --&gt;
    &lt;MyComponent :dynamic-prop="miVariable" /&gt;
    
    &lt;!-- Número como string vs número --&gt;
    &lt;MyComponent number-as-string="42" /&gt;      &lt;!-- String "42" --&gt;
    &lt;MyComponent :number-as-number="42" /&gt;     &lt;!-- Number 42 --&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: Reactividad de Props</h3>
        <div class="demo-container">
          <ReactiveDemo 
            static-text="Este texto es estático"
            :dynamic-text="dynamicValue"
          />
          <input v-model="dynamicValue" placeholder="Escribe algo..." class="demo-input">
          <p>Valor dinámico: {{ dynamicValue }}</p>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Patrones Avanzados</h2>

      <h3 class="subtitle-sm">v-bind con Objetos</h3>

      <div class="code-block">
        <h3 class="code-title">Pasar múltiples props con un objeto</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;!-- Forma tradicional --&gt;
  &lt;UserProfile 
    :name="user.name" 
    :age="user.age" 
    :email="user.email" 
  /&gt;
  
  &lt;!-- Con v-bind (más conciso) --&gt;
  &lt;UserProfile v-bind="user" /&gt;
  
  &lt;!-- Combinando con otros props --&gt;
  &lt;UserProfile v-bind="user" :is-verified="true" /&gt;
&lt;/template&gt;
        </code></pre>
      </div>

      <h3 class="subtitle-sm">Props con Valores Computados</h3>

      <div class="code-block">
        <h3 class="code-title">Usar computed properties como props</h3>
        <pre class="code"><code>
&lt;template&gt;
  &lt;ProductCard 
    :product="product"
    :discounted-price="discountedPrice"
    :is-on-sale="isOnSale"
  /&gt;
&lt;/template&gt;
        </code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: v-bind con Objetos</h3>
        <div class="demo-container">
          <UserProfile v-bind="userProfile" />
          <button @click="updateProfile" class="demo-button">Actualizar Perfil</button>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Buenas Prácticas</h2>

      <div class="best-practices">
        <div class="practice-item">
          <h4>✅ Usar camelCase en JavaScript</h4>
          <pre class="code-small"><code>defineProps({
  userName: String,    // ✅ Bueno
  user_name: String    // ❌ Evitar
})</code></pre>
        </div>

        <div class="practice-item">
          <h4>✅ Usar kebab-case en Templates</h4>
          <pre class="code-small"><code>&lt;!-- ✅ Bueno --&gt;
&lt;MyComponent user-name="Ana" /&gt;

&lt;!-- ❌ No recomendado --&gt;
&lt;MyComponent userName="Ana" /&gt;</code></pre>
        </div>

        <div class="practice-item">
          <h4>✅ Validar Props Importantes</h4>
          <pre class="code-small"><code>defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  email: {
    type: String,
    validator: (email) => isValidEmail(email)
  }
})</code></pre>
        </div>

        <div class="practice-item">
          <h4>✅ Proporcionar Valores por Defecto</h4>
          <pre class="code-small"><code>defineProps({
  count: {
    type: Number,
    default: 0
  },
  items: {
    type: Array,
    default: () => []  // ✅ Usar función para objetos/arrays
  }
})</code></pre>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Errores Comunes</h2>

      <div class="error-examples">
        <div class="error-item">
          <h4>❌ Mutar Props Directamente</h4>
          <pre class="code-error"><code>&lt;script setup&gt;
defineProps({ count: Number })

// ❌ ERROR: No mutar props directamente
props.count++

// ✅ SOLUCIÓN: Usar emits o variables reactivas
const emit = defineEmits(['update:count'])
const updateCount = () => emit('update:count', props.count + 1)
&lt;/script&gt;</code></pre>
        </div>

        <div class="error-item">
          <h4>❌ No Validar Props Críticos</h4>
          <pre class="code-error"><code>// ❌ Peligroso sin validación
defineProps({
  userId: String
})

// ✅ Seguro con validación
defineProps({
  userId: {
    type: String,
    required: true,
    validator: (id) => id.length === 36
  }
})
</code></pre>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Estado para las demos
const demoUser = ref({
  name: 'Carlos López',
  age: 30,
  email: 'carlos@example.com',
  isPremium: false
})

const currentProduct = reactive({
  name: 'Laptop Gaming',
  price: 1200,
  rating: 4
})

const dynamicValue = ref('Texto dinámico')

const userProfile = reactive({
  name: 'Ana García',
  age: 25,
  email: 'ana@example.com',
  city: 'Madrid'
})

// Métodos
const togglePremium = () => {
  demoUser.value.isPremium = !demoUser.value.isPremium
}

const updateProfile = () => {
  userProfile.age += 1
  userProfile.city = userProfile.city === 'Madrid' ? 'Barcelona' : 'Madrid'
}

// Componentes de demostración
const UserCard = {
  name: 'UserCard',
  template: `
    <div class="user-card-demo" :class="{ premium: isPremium }">
      <h4>{{ name }}</h4>
      <p>Edad: {{ age }} años</p>
      <p>Email: {{ email }}</p>
      <p v-if="isPremium" class="premium-badge">⭐ Usuario Premium</p>
    </div>
  `,
  props: {
    name: { type: String, required: true },
    age: { type: Number, default: 18 },
    email: { type: String, required: true },
    isPremium: { type: Boolean, default: false }
  }
}

const ProductCard = {
  name: 'ProductCard',
  template: `
    <div class="product-card-demo">
      <h4>{{ product && product.name ? product.name : 'Producto' }}</h4>
      <p class="price">{{ product && product.price !== undefined ? product.price : 0 }}</p>
      <div class="rating">
        <span 
          v-for="n in 5" 
          :key="n" 
          class="star"
          :class="{ active: n <= (product && product.rating ? product.rating : 0) }"
        >★</span>
      </div>
    </div>
  `,
  props: {
    product: {
      type: Object,
      default: () => ({
        name: 'Producto',
        price: 0,
        rating: 0
      })
    }
  }
}

const ReactiveDemo = {
  name: 'ReactiveDemo',
  template: `
    <div class="reactive-demo">
      <p><strong>Prop estático:</strong> {{ staticText }}</p>
      <p><strong>Prop dinámico:</strong> {{ dynamicText }}</p>
    </div>
  `,
  props: {
    staticText: String,
    dynamicText: String
  }
}

const UserProfile = {
  name: 'UserProfile',
  template: `
    <div class="profile-demo">
      <h4>{{ name }}</h4>
      <p>Edad: {{ age }}</p>
      <p>Email: {{ email }}</p>
      <p>Ciudad: {{ city }}</p>
    </div>
  `,
  props: {
    name: String,
    age: Number,
    email: String,
    city: String
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
}.code {
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

/* Diagrama de flujo */
.flow-diagram {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}

.component {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid #e5e7eb;
  text-align: center;
  flex: 1;
  margin: 0 1rem;
}

.component h4 {
  margin: 0 0 1rem 0;
  color: #42b883;
}

.data-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.arrow {
  font-size: 1.5rem;
  color: #42b883;
}

.data {
  background: #42b883;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: bold;
}

/* Demo Styles */
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

.user-card-demo {
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
  min-width: 250px;
}

.user-card-demo.premium {
  border-color: #f59e0b;
  background: #fffbeb;
}

.premium-badge {
  color: #f59e0b;
  font-weight: bold;
}

.product-card-demo {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
  min-width: 200px;
}

.price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #10b981;
}

.rating {
  display: flex;
  gap: 0.25rem;
}

.star {
  color: #d1d5db;
  font-size: 1.2rem;
}

.star.active {
  color: #f59e0b;
}

.reactive-demo {
  border: 2px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
}

.profile-demo {
  border: 2px solid #06b6d4;
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
  min-width: 250px;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
}

.demo-button:hover {
  background-color: #359f72;
}

/* Buenas prácticas */
.best-practices {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
}

.practice-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.practice-item h4 {
  margin: 0 0 0.5rem 0;
  color: #10b981;
}

/* Errores */
.error-examples {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.error-item {
  border-left: 4px solid #ef4444;
  padding-left: 1rem;
}

.error-item h4 {
  color: #ef4444;
  margin: 0 0 0.5rem 0;
}

.code-error {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.25rem;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: #dc2626;
}
@media (max-width: 768px) {
  .content {
    width: 95%;
  }
  .flow-diagram {
    flex-direction: column;
    gap: 1rem;
  }
  .best-practices {
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
