<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Manual de Props y Componentización</h1>
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
              <code>defineProps(&lbrace; prop: Type &rbrace;)</code>
              <span class="arrow">↓</span>
              <span class="data">&lbrace;&lbrace; prop &rbrace;&rbrace;</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tip-box">
        <strong>💡 Tip:</strong> Los props siguen el principio de "propiedades hacia abajo, eventos hacia arriba"
      </div>

      <hr />

      <h2 class="subtitle">Sintaxis Básica</h2>

      <div class="api-comparison">
        <div class="api-option">
          <h3 class="code-title">Composition API (Recomendado)</h3>
          <div class="code-block">
            <pre class="code"><code>&lt;template&gt;
  &lt;div class="user-card"&gt;
    &lt;h3&gt;&lbrace;&lbrace; name &rbrace;&rbrace;&lt;/h3&gt;
    &lt;p&gt;Edad: &lbrace;&lbrace; age &rbrace;&rbrace;&lt;/p&gt;
    &lt;p&gt;Email: &lbrace;&lbrace; email &rbrace;&rbrace;&lt;/p&gt;
    &lt;p v-if="isPremium" class="premium"&gt;⭐ Premium&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Definir props con defineProps
const props = defineProps(&lbrace;
  name: &lbrace;
    type: String,
    required: true
  &rbrace;,
  age: &lbrace;
    type: Number,
    default: 18
  &rbrace;,
  email: &lbrace;
    type: String,
    required: true
  &rbrace;,
  isPremium: &lbrace;
    type: Boolean,
    default: false
  &rbrace;
&rbrace;)
&lt;/script&gt;</code></pre>
          </div>
        </div>

        <div class="api-option">
          <h3 class="code-title">Options API</h3>
          <div class="code-block">
            <pre class="code"><code>&lt;script&gt;
export default &lbrace;
  props: &lbrace;
    name: &lbrace;
      type: String,
      required: true
    &rbrace;,
    age: &lbrace;
      type: Number,
      default: 18
    &rbrace;,
    email: &lbrace;
      type: String,
      required: true
    &rbrace;,
    isPremium: &lbrace;
      type: Boolean,
      default: false
    &rbrace;
  &rbrace;
&rbrace;
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>

      <h3 class="subtitle-sm">Uso en Componente Padre</h3>

      <div class="code-block">
        <h3 class="code-title">Pasando Props al Componente Hijo</h3>
        <pre class="code"><code>&lt;template&gt;
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
&lt;/template&gt;</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: Tarjetas de Usuario</h3>
        <div class="demo-container">
          <div class="user-card-demo" :class="{ premium: demoUser.isPremium }">
            <h4>{{ demoUser.name }}</h4>
            <p>Edad: {{ demoUser.age }} años</p>
            <p>Email: {{ demoUser.email }}</p>
            <p v-if="demoUser.isPremium" class="premium-badge">⭐ Usuario Premium</p>
          </div>
          <div class="demo-controls">
            <button @click="togglePremium" class="demo-button">
              {{ demoUser.isPremium ? 'Quitar Premium' : 'Hacer Premium' }}
            </button>
            <button @click="incrementAge" class="demo-button secondary">
              Incrementar Edad
            </button>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Tipos y Validación de Props</h2>

      <div class="code-block">
        <h3 class="code-title">Validación Completa de Props</h3>
        <pre class="code"><code>&lt;script setup&gt;
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
      color: 'blue',
      size: 'medium'
    &rbrace;)
  &rbrace;,
  
  // Función como prop
  onSuccess: &lbrace;
    type: Function,
    default: () =&gt; &lbrace;&rbrace;
  &rbrace;
&rbrace;)
&lt;/script&gt;</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Tipos de Props Disponibles</h3>
        <div class="type-grid">
          <div class="type-item">
            <span class="type-badge">String</span>
            <span>Cadenas de texto</span>
          </div>
          <div class="type-item">
            <span class="type-badge">Number</span>
            <span>Números</span>
          </div>
          <div class="type-item">
            <span class="type-badge">Boolean</span>
            <span>Valores verdadero/falso</span>
          </div>
          <div class="type-item">
            <span class="type-badge">Array</span>
            <span>Arreglos</span>
          </div>
          <div class="type-item">
            <span class="type-badge">Object</span>
            <span>Objetos</span>
          </div>
          <div class="type-item">
            <span class="type-badge">Date</span>
            <span>Fechas</span>
          </div>
          <div class="type-item">
            <span class="type-badge">Function</span>
            <span>Funciones</span>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Props Reactivos vs No Reactivos</h2>

      <div class="code-block">
        <h3 class="code-title">Diferencia en el Comportamiento</h3>
        <pre class="code"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- No reactivo (string estático) --&gt;
    &lt;MyComponent static-prop="valor estático" /&gt;
    
    &lt;!-- Reactivo (vinculado a variable) --&gt;
    &lt;MyComponent :dynamic-prop="miVariable" /&gt;
    
    &lt;!-- Número como string vs número --&gt;
    &lt;MyComponent number-as-string="42" /&gt;      &lt;!-- String "42" --&gt;
    &lt;MyComponent :number-as-number="42" /&gt;     &lt;!-- Number 42 --&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: Reactividad de Props</h3>
        <div class="demo-container">
          <div class="reactive-demo">
            <p><strong>Prop estático:</strong> "Este texto es estático"</p>
            <p><strong>Prop dinámico:</strong> "{{ dynamicValue }}"</p>
          </div>
          <div class="demo-controls">
            <input v-model="dynamicValue" placeholder="Escribe algo..." class="demo-input">
            <p class="demo-hint">El texto se actualiza en tiempo real gracias a la reactividad</p>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Patrones Avanzados</h2>

      <div class="pattern-grid">
        <div class="pattern-item">
          <h3 class="code-title">v-bind con Objetos</h3>
          <div class="code-block">
            <pre class="code"><code>&lt;!-- Forma tradicional --&gt;
&lt;UserProfile 
  :name="user.name" 
  :age="user.age" 
  :email="user.email" 
/&gt;

&lt;!-- Con v-bind (más conciso) --&gt;
&lt;UserProfile v-bind="user" /&gt;

&lt;!-- Combinando con otros props --&gt;
&lt;UserProfile v-bind="user" :is-verified="true" /&gt;</code></pre>
          </div>
        </div>

        <div class="pattern-item">
          <h3 class="code-title">Props con Valores Computados</h3>
          <div class="code-block">
            <pre class="code"><code>&lt;template&gt;
  &lt;ProductCard 
    :product="product"
    :discounted-price="discountedPrice"
    :is-on-sale="isOnSale"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const discountedPrice = computed(() =&gt; 
  product.price * 0.8
)

const isOnSale = computed(() =&gt; 
  product.stock &gt; 0 &amp;&amp; product.price &lt; 100
)
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Buenas Prácticas</h2>

      <div class="best-practices">
        <div class="practice-item">
          <h4>Usar camelCase en JavaScript</h4>
          <pre class="code-small"><code>defineProps({
  userName: String,    // ✅ Bueno
  user_name: String    // ❌ Evitar
})</code></pre>
        </div>

        <div class="practice-item">
          <h4>Usar kebab-case en Templates</h4>
          <pre class="code-small"><code>&lt;!-- ✅ Bueno --&gt;
&lt;MyComponent user-name="Ana" /&gt;

&lt;!-- ❌ No recomendado --&gt;
&lt;MyComponent userName="Ana" /&gt;</code></pre>
        </div>

        <div class="practice-item">
          <h4>Validar Props Importantes</h4>
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
          <h4>Proporcionar Valores por Defecto</h4>
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
          <h4>Mutación Directa de Props</h4>
          <pre class="code-error"><code>&lt;script setup&gt;
defineProps({ count: Number })

// ❌ ERROR: No mutar props directamente
props.count++

// ✅ SOLUCIÓN: Usar emits
const emit = defineEmits(['update:count'])
const updateCount = () => emit('update:count', props.count + 1)
&lt;/script&gt;</code></pre>
        </div>

        <div class="error-item">
          <h4>Falta de Validación</h4>
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
})</code></pre>
        </div>
      </div>

      <div class="summary">
        <h3 class="subtitle-sm">Resumen Clave</h3>
        <div class="summary-grid">
          <div class="summary-item">
            <p>Los props permiten comunicación padre-hijo</p>
          </div>
          <div class="summary-item">
            <p>Siempre valida props importantes</p>
          </div>
          <div class="summary-item">
            <p>Nunca mutes props directamente</p>
          </div>
          <div class="summary-item">
            <p>Usa valores por defecto apropiados</p>
          </div>
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

const dynamicValue = ref('Texto dinámico')

// Métodos
const togglePremium = () => {
  demoUser.value.isPremium = !demoUser.value.isPremium
}

const incrementAge = () => {
  demoUser.value.age += 1
}
</script>

<style scoped>
.father {
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
  margin-bottom: 1rem;
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

/* Tip box */
.tip-box {
  background-color: #f3f4f6;
  border-left: 4px solid #42b883;
  padding: 1.5rem;
  border-radius: 0.25rem;
  margin: 1rem 0;
}

/* API Comparison */
.api-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

/* Code blocks */
.code {
  background-color: #1f2937;
  color: #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-top: 1rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  overflow-x: auto;
  line-height: 1.5;
}
.code-small {
  background-color: #1f2937;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
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

/* Flow diagram */
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

.demo-controls {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
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

.demo-button.secondary {
  background-color: #6b7280;
}

.demo-button.secondary:hover {
  background-color: #4b5563;
}

.demo-input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  max-width: 300px;
}

.demo-hint {
  color: #6b7280;
  font-style: italic;
}

/* Type grid */
.type-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.type-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  text-align: center;
}

.type-badge {
  background: #42b883;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Reactive demo */
.reactive-demo {
  border: 2px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
  min-width: 400px;
}

/* Pattern grid */
.pattern-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.pattern-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

/* Best practices */
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

/* Error examples */
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

/* Summary */
.summary {
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 2rem 0;
}

.summary-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.summary-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  text-align: center;
}

.summary-item p {
  margin: 0;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .content {
    width: 95%;
    padding: 1rem;
  }
  .api-comparison,
  .pattern-grid,
  .best-practices,
  .summary-grid {
    grid-template-columns: 1fr;
  }
  .flow-diagram {
    flex-direction: column;
    gap: 1rem;
  }
  .type-grid {
    grid-template-columns: 1fr 1fr;
  }
  .demo-controls {
    flex-direction: column;
    align-items: flex-start;
  }
  .demo-input {
    max-width: 100%;
  }
  .reactive-demo {
    min-width: auto;
    width: 100%;
  }
}
</style>