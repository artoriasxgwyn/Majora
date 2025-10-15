<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Instalar Quasar en Proyecto Vite Existente</h1>
      <p class="p">
        Si ya tienes un proyecto Vue creado con <strong>Vite</strong> y quieres integrar <strong>Quasar Framework</strong>, este manual te guiará paso a paso en el proceso de instalación y configuración.
      </p>

      <div class="example">
        <h3 class="example-title">⚠️ Consideraciones Previas</h3>
        <p class="p">
          Esta guía asume que tienes un proyecto Vue 3 funcionando creado con <code>npm create vite@latest</code> y deseas añadir Quasar sin empezar desde cero.
        </p>
      </div>

      <hr />

      <h2 class="subtitle">Requisitos del Proyecto</h2>
      <p class="p">
        Verifica que tu proyecto cumple con los siguientes requisitos:
      </p>

      <div class="code-block">
        <h3 class="code-title">Verificar Versiones</h3>
        <pre class="code"><code># Verificar Vue 3
npm list vue

# Verificar Vite
npm list vite

# Estructura b&amp;aacute;sica esperada:
mi-proyecto-vite/
├── src/
│   ├── App.vue
│   ├── main.js
│   └── components/
├── package.json
└── vite.config.js</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">✅ Compatibilidad</h3>
        <ul>
          <li class="p"><strong>Vue 3:</strong> Requerido (Composition API)</li>
          <li class="p"><strong>Vite 4+:</strong> Recomendado</li>
          <li class="p"><strong>Node.js 16+:</strong> Necesario</li>
        </ul>
      </div>

      <hr />

      <h2 class="subtitle">Paso 1: Instalar Quasar</h2>
      <p class="p">
        Comienza instalando Quasar y sus dependencias en tu proyecto existente.
      </p>

      <div class="code-block">
        <h3 class="code-title">Instalación de Dependencias</h3>
        <pre class="code"><code># Navegar al directorio del proyecto
cd mi-proyecto-vite

# Instalar Quasar con sus dependencias principales
npm install quasar @quasar/vite-plugin
# o con yarn
yarn add quasar @quasar/vite-plugin

# Instalar iconos y fuentes (opcional pero recomendado)
npm install @quasar/extras
# o con yarn
yarn add @quasar/extras</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">📦 Paquetes Instalados</h3>
        <ul>
          <li class="p"><strong>quasar:</strong> Framework principal</li>
          <li class="p"><strong>@quasar/vite-plugin:</strong> Plugin de Vite para Quasar</li>
          <li class="p"><strong>@quasar/extras:</strong> Iconos y fuentes adicionales</li>
        </ul>
      </div>

      <hr />

      <h2 class="subtitle">Paso 2: Configurar Vite</h2>
      <p class="p">
        Configura el plugin de Quasar en tu archivo <code>vite.config.js</code>.
      </p>

      <div class="code-block">
        <h3 class="code-title">vite.config.js</h3>
        <pre class="code"><code>// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ]
})</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">🔧 Configuración Explicada</h3>
        <p class="p">
          El plugin de Quasar para Vite necesita:
        </p>
        <ul>
          <li class="p"><strong>transformAssetUrls:</strong> Para procesar assets en templates Vue</li>
          <li class="p"><strong>sassVariables:</strong> Ruta a las variables Sass personalizadas (opcional)</li>
        </ul>
      </div>

      <hr />

      <h2 class="subtitle">Paso 3: Configurar Quasar</h2>
      <p class="p">
        Crea un archivo de configuración para Quasar en tu proyecto.
      </p>

      <div class="code-block">
        <h3 class="code-title">quasar.config.js</h3>
        <pre class="code"><code>// quasar.config.js
export default {
  framework: {
    config: {
      dark: false, // modo oscuro
      brand: {
        primary: '#1976d2',
        secondary: '#26a69a',
        accent: '#9c27b0',
        // ... m&amp;aacute;s colores personalizados
      }
    },
    iconSet: 'material-icons', // o 'mdi-v6', 'fontawesome-v6', etc.
    lang: 'es' // idioma
  },
  plugins: [
    'Notify',
    'Dialog',
    'Loading'
    // ... otros plugins de Quasar
  ]
}</code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Alternativa: Configuración en main.js</h3>
        <pre class="code"><code>// src/main.js
import { createApp } from 'vue'
import App from './App.vue'

// Quasar
import { Quasar, Notify, Dialog } from 'quasar'
import quasarLang from 'quasar/lang/es'
import quasarIconSet from 'quasar/icon-set/material-icons'

// Estilos de Quasar
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)

app.use(Quasar, {
  plugins: { Notify, Dialog },
  lang: quasarLang,
  iconSet: quasarIconSet,
  config: {
    dark: false,
    brand: {
      primary: '#1976d2',
      secondary: '#26a69a',
      accent: '#9c27b0'
    }
  }
})

app.mount('#app')</code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Paso 4: Configurar Variables Sass (Opcional)</h2>
      <p class="p">
        Para personalizar los estilos de Quasar, crea un archivo de variables Sass.
      </p>

      <div class="code-block">
        <h3 class="code-title">src/quasar-variables.sass</h3>
        <pre class="code"><code>// Variables Sass personalizadas para Quasar

// Colores principales
$primary   : #1976d2
$secondary : #26a69a
$accent    : #9c27b0

$dark      : #1d1d1d
$dark-page : #121212

$positive  : #21BA45
$negative  : #C10015
$info      : #31CCEC
$warning   : #F2C037

// Tipograf&amp;iacute;a
$typography-font-family : 'Roboto, -apple-system, Helvetica Neue, Helvetica, Arial, sans-serif'

// Espaciado
$space-base : 16px
$space-x-base : $space-base
$space-y-base : $space-base

// Breakpoints
$breakpoint-xs: 599px
$breakpoint-sm: 1023px
$breakpoint-md: 1439px
$breakpoint-lg: 1919px</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">🎨 Personalización</h3>
        <p class="p">
          Las variables Sass te permiten personalizar completamente la apariencia de Quasar sin sobrescribir CSS.
        </p>
      </div>

      <hr />

      <h2 class="subtitle">Paso 5: Actualizar App.vue</h2>
      <p class="p">
        Modifica tu componente principal para usar los componentes de Quasar.
      </p>

      <div class="code-block">
        <h3 class="code-title">App.vue Actualizado</h3>
        <pre class="code"><code>&lt;template&gt;
  &lt;q-layout view=&quot;hHh lpR fFf&quot;&gt;
    &lt;q-header elevated class=&quot;bg-primary text-white&quot;&gt;
      &lt;q-toolbar&gt;
        &lt;q-btn 
          flat 
          @click=&quot;drawer = !drawer&quot; 
          round 
          dense 
          icon=&quot;menu&quot; 
        /&gt;
        &lt;q-toolbar-title&gt;
          Mi App con Quasar + Vite
        &lt;/q-toolbar-title&gt;
      &lt;/q-toolbar&gt;
    &lt;/q-header&gt;

    &lt;q-drawer 
      v-model=&quot;drawer&quot; 
      show-if-above 
      :width=&quot;200&quot; 
      :breakpoint=&quot;500&quot;
    &gt;
      &lt;q-scroll-area class=&quot;fit&quot;&gt;
        &lt;q-list padding&gt;
          &lt;q-item clickable v-ripple&gt;
            &lt;q-item-section avatar&gt;
              &lt;q-icon name=&quot;inbox&quot; /&gt;
            &lt;/q-item-section&gt;
            &lt;q-item-section&gt;
              Inicio
            &lt;/q-item-section&gt;
          &lt;/q-item&gt;
          
          &lt;q-item clickable v-ripple&gt;
            &lt;q-item-section avatar&gt;
              &lt;q-icon name=&quot;star&quot; /&gt;
            &lt;/q-item-section&gt;
            &lt;q-item-section&gt;
              Favoritos
            &lt;/q-item-section&gt;
          &lt;/q-item&gt;
        &lt;/q-list&gt;
      &lt;/q-scroll-area&gt;
    &lt;/q-drawer&gt;

    &lt;q-page-container&gt;
      &lt;router-view /&gt;
    &lt;/q-page-container&gt;
  &lt;/q-layout&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const drawer = ref(false)
&lt;/script&gt;

&lt;style&gt;
/* Estilos globales */
body {
  margin: 0;
}
&lt;/style&gt;</code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Paso 6: Usar Componentes Quasar</h2>
      <p class="p">
        Ahora puedes usar cualquier componente de Quasar en tu aplicación.
      </p>

      <div class="code-block">
        <h3 class="code-title">Ejemplo de Componente</h3>
        <pre class="code"><code>&lt;template&gt;
  &lt;div class=&quot;q-pa-md&quot;&gt;
    &lt;q-card class=&quot;my-card&quot;&gt;
      &lt;q-card-section&gt;
        &lt;div class=&quot;text-h6&quot;&gt;Mi Componente con Quasar&lt;/div&gt;
        &lt;div class=&quot;text-subtitle2&quot;&gt;Integrado en Vite&lt;/div&gt;
      &lt;/q-card-section&gt;

      &lt;q-card-section&gt;
        &lt;q-input 
          v-model=&quot;texto&quot; 
          label=&quot;Campo de texto&quot; 
          class=&quot;q-mb-md&quot;
        /&gt;
        
        &lt;q-btn 
          color=&quot;primary&quot; 
          label=&quot;Enviar&quot; 
          @click=&quot;mostrarNotificacion&quot;
          :disable=&quot;!texto&quot;
        /&gt;
        
        &lt;q-btn 
          color=&quot;secondary&quot; 
          label=&quot;Limpiar&quot; 
          @click=&quot;texto = ''&quot; 
          class=&quot;q-ml-sm&quot;
        /&gt;
      &lt;/q-card-section&gt;
    &lt;/q-card&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const texto = ref('')

const mostrarNotificacion = () =&gt; {
  $q.notify({
    message: `Texto enviado: ${texto.value}`,
    color: 'positive',
    position: 'top'
  })
  texto.value = ''
}
&lt;/script&gt;

&lt;style scoped&gt;
.my-card {
  max-width: 400px;
  margin: 0 auto;
}
&lt;/style&gt;</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">🧩 Componentes Disponibles</h3>
        <p class="p">
          Con Quasar instalado, tienes acceso a más de 80 componentes listos para usar:
        </p>
        <ul>
          <li class="p"><strong>Formularios:</strong> QInput, QSelect, QCheckbox, QToggle</li>
          <li class="p"><strong>Layout:</strong> QLayout, QHeader, QDrawer, QPage</li>
          <li class="p"><strong>Navegación:</strong> QTabs, QBreadcrumbs, QPagination</li>
          <li class="p"><strong>Utilidades:</strong> QDialog, QNotify, QLoading, QAjaxBar</li>
        </ul>
      </div>

      <hr />

      <h2 class="subtitle">Paso 7: Configuración Avanzada</h2>
      <p class="p">
        Para proyectos más complejos, considera estas configuraciones adicionales.
      </p>

      <div class="code-block">
        <h3 class="code-title">vite.config.js Avanzado</h3>
        <pre class="code"><code>import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    
    quasar({
      sassVariables: 'src/quasar-variables.sass',
      autoImportComponentCase: 'pascal', // 'kebab' | 'pascal' | 'combined'
      
      // Tree shaking optimizado
      treeshake: {
        // Components to exclude from auto-import
        exclude: [
          'QChatMessage',
          'QColor'
        ],
        
        // Components to include (even if not used)
        include: [
          'QBtn',
          'QCard'
        ]
      }
    })
  ],
  
  // Optimizaciones para Quasar
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          quasar: ['quasar']
        }
      }
    }
  },
  
  // Server configuration
  server: {
    port: 3000,
    open: true
  }
})</code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Resolución de Problemas Comunes</h2>

      <h3 class="subtitle-sm">Error: Cannot find module '@quasar/vite-plugin'</h3>
      <div class="code-block">
        <h3 class="code-title">Solución</h3>
        <pre class="code"><code># Reinstalar el plugin
npm uninstall @quasar/vite-plugin
npm install @quasar/vite-plugin

# Verificar que est&amp;eacute; en dependencies
npm list @quasar/vite-plugin</code></pre>
      </div>

      <h3 class="subtitle-sm">Error: Componentes no se renderizan</h3>
      <div class="code-block">
        <h3 class="code-title">Solución</h3>
        <pre class="code"><code>// Verificar que Quasar est&amp;eacute; correctamente inicializado
// en main.js o App.vue

import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'

app.use(Quasar, {
  // config necesaria
})</code></pre>
      </div>

      <h3 class="subtitle-sm">Error: Estilos no se aplican</h3>
      <div class="code-block">
        <h3 class="code-title">Solución</h3>
        <pre class="code"><code>// Asegurar que los estilos de Quasar se importen
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

// En vite.config.js, verificar transformAssetUrls
template: { transformAssetUrls }</code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Verificación Final</h2>
      <p class="p">
        Para confirmar que Quasar está correctamente instalado:
      </p>

      <div class="code-block">
        <h3 class="code-title">Comandos de Verificación</h3>
        <pre class="code"><code># Iniciar servidor de desarrollo
npm run dev

# Verificar en el navegador
# Deber&amp;iacute;as ver componentes Quasar funcionando

# Verificar build de producci&amp;oacute;n
npm run build
npm run preview</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">✅ Indicadores de Éxito</h3>
        <ul>
          <li class="p">Servidor se inicia sin errores</li>
          <li class="p">Componentes Quasar se renderizan correctamente</li>
          <li class="p">Estilos y temas se aplican</li>
          <li class="p">Build de producción funciona</li>
          <li class="p">Plugins (Notify, Dialog, etc.) funcionan</li>
        </ul>
      </div>

      <hr />

      <h2 class="subtitle">Estructura Final del Proyecto</h2>

      <div class="code-block">
        <h3 class="code-title">Estructura con Quasar</h3>
        <pre class="code"><code>mi-proyecto-vite/
├── src/
│   ├── App.vue              # Actualizado con Quasar
│   ├── main.js              # Configuraci&amp;oacute;n de Quasar
│   ├── quasar-variables.sass # Variables personalizadas
│   └── components/
│       └── MiComponente.vue  # Usando componentes Quasar
├── node_modules/
│   └── quasar/              # Dependencias de Quasar
├── package.json             # Dependencias actualizadas
├── vite.config.js           # Plugin de Quasar configurado
└── quasar.config.js         # Configuraci&amp;oacute;n de Quasar</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">🎉 ¡Listo!</h3>
        <p class="p">
          Ahora tienes Quasar Framework completamente integrado en tu proyecto Vite existente. Puedes comenzar a usar todos los componentes y características de Quasar mientras mantienes tu configuración personalizada de Vite.
        </p>
      </div>

    </section>
  </div>
</template>

<script setup>
// No se necesita lógica específica para esta vista
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
  color: #1976d2;
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
  border-left: 4px solid #1976d2;
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

/* Estilos para demostración de componentes Quasar */
.q-pa-md {
  padding: 16px;
}
.q-mb-md {
  margin-bottom: 16px;
}
.q-ml-sm {
  margin-left: 8px;
}

@media (max-width: 768px) {
  .content {
    width: 95%;
  }
}
</style>