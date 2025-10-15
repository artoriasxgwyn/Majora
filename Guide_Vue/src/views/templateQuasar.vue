<template>
  <div class="father">
    <section class="content">
      <h1 class="title">Crear un Proyecto con Quasar Framework</h1>
      <p class="p">
        <strong>Quasar Framework</strong> es un framework de Vue.js de código abierto que permite desarrollar aplicaciones web responsive, PWA, aplicaciones móviles y de escritorio con una sola base de código.
      </p>

      <hr />

      <h2 class="subtitle">¿Qué es Quasar Framework?</h2>
      <p class="p">
        Quasar es más que un simple framework de UI - es un framework completo que proporciona:
      </p>
      <ul>
        <li class="p"><strong>Componentes UI</strong> de alta calidad</li>
        <li class="p"><strong>Build system</strong> configurado y optimizado</li>
        <li class="p"><strong>Multiplataforma</strong>: Web, Mobile, Desktop, PWA</li>
        <li class="p"><strong>Performance</strong> optimizado por defecto</li>
        <li class="p"><strong>TypeScript</strong> soporte nativo</li>
      </ul>

      <div class="example">
        <h3 class="example-title">🚀 Características Principales</h3>
        <p class="p">
          Quasar permite desarrollar una vez y desplegar en múltiples plataformas sin necesidad de cambiar el código.
        </p>
      </div>

      <hr />

      <h2 class="subtitle">Requisitos Previos</h2>
      <p class="p">
        Antes de instalar Quasar, asegúrate de tener lo siguiente en tu sistema:
      </p>

      <div class="code-block">
        <h3 class="code-title">Verificar Instalaciones</h3>
        <pre class="code"><code># Verificar versi&amp;oacute;n de Node.js (requerido 14+)
node --version

# Verificar npm
npm --version

# Verificar yarn (opcional)
yarn --version</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">📋 Versiones Recomendadas</h3>
        <ul>
          <li class="p"><strong>Node.js:</strong> 14.x o superior</li>
          <li class="p"><strong>npm:</strong> 6.x o superior</li>
          <li class="p"><strong>yarn:</strong> 1.x o superior (opcional)</li>
        </ul>
      </div>

      <hr />

      <h2 class="subtitle">Instalación de Quasar CLI</h2>
      <p class="p">
        La CLI de Quasar es la herramienta principal para crear y gestionar proyectos. Se instala globalmente.
      </p>

      <div class="code-block">
        <h3 class="code-title">Instalación Global</h3>
        <pre class="code"><code># Con npm
npm install -g @quasar/cli

# Con yarn
yarn global add @quasar/cli

# Verificar instalaci&amp;oacute;n
quasar --version</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">💡 Nota Importante</h3>
        <p class="p">
          En algunos sistemas, puede que necesites usar <code>sudo</code> para instalar paquetes globalmente, o configurar correctamente los permisos de npm.
        </p>
      </div>

      <hr />

      <h2 class="subtitle">Crear un Nuevo Proyecto</h2>
      <p class="p">
        Una vez instalada la CLI, puedes crear un nuevo proyecto con el comando <code>quasar create</code>.
      </p>

      <div class="code-block">
        <h3 class="code-title">Comando de Creación</h3>
        <pre class="code"><code># Crear un nuevo proyecto
quasar create &amp;lt;nombre-del-proyecto&amp;gt;

# Ejemplo:
quasar create mi-aplicacion</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Asistente Interactivo</h3>
        <p class="p">
          El comando <code>quasar create</code> iniciará un asistente interactivo que te guiará en la configuración inicial del proyecto.
        </p>
      </div>

      <h3 class="subtitle-sm">Opciones del Asistente</h3>
      <p class="p">
        Durante la creación, el asistente te preguntará sobre:
      </p>

      <div class="code-block">
        <h3 class="code-title">Configuraciones Típicas</h3>
        <pre class="code"><code>? Project name (internal usage for dev) (mi-aplicacion)
? Project product name (must start with letter if building mobile apps) (Mi Aplicacion)
? Project description (A Quasar Project)
? Author (Tu Nombre &amp;lt;tu-email@ejemplo.com&amp;gt;)
? Pick your CSS preprocessor: (Use arrow keys)
❯ Sass with SCSS syntax 
  Sass with indented syntax 
  Stylus 
  None (the others will still be available)
? Check the features needed for your project:
 ◉ ESLint
 ◯ TypeScript
 ◯ Vuex
 ◯ Axios
 ◯ Vue-i18n
❯◉ Vuex
? Pick an ESLint preset: (Use arrow keys)
❯ Standard 
  Prettier 
? Continue to install project dependencies after the project has been created? (recommended) (Y/n)</code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Estructura del Proyecto</h2>
      <p class="p">
        Un proyecto Quasar tiene una estructura organizada y clara:
      </p>

      <div class="code-block">
        <h3 class="code-title">Estructura de Directorios</h3>
        <pre class="code"><code>mi-aplicacion/
├── public/                 # Archivos p&amp;uacute;blicos
├── src/
│   ├── assets/            # Recursos (im&amp;aacute;genes, fuentes)
│   ├── components/        # Componentes Vue
│   ├── css/               # Estilos globales
│   ├── layouts/           # Layouts de la aplicaci&amp;oacute;n
│   ├── pages/             # P&amp;aacute;ginas/vistas
│   ├── router/            # Configuraci&amp;oacute;n de rutas
│   ├── store/             # Estado global (Vuex)
│   ├── boot/              # Boot files (inicializaci&amp;oacute;n)
│   └── App.vue            # Componente ra&amp;iacute;z
├── quasar.conf.js         # Configuraci&amp;oacute;n de Quasar
├── package.json
└── ...otros archivos</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">🏗️ Arquitectura Quasar</h3>
        <p class="p">
          Quasar sigue una arquitectura bien definida que separa claramente las responsabilidades entre layouts, pages, components y stores.
        </p>
      </div>

      <hr />

      <h2 class="subtitle">Comandos Principales</h2>
      <p class="p">
        Quasar CLI proporciona varios comandos para diferentes tareas de desarrollo.
      </p>

      <div class="code-block">
        <h3 class="code-title">Comandos de Desarrollo</h3>
        <pre class="code"><code># Desarrollo con hot-reload
quasar dev

# Desarrollo para mobile
quasar dev -m

# Desarrollo para desktop (con Electron)
quasar dev -m electron

# Desarrollo con modo PWA
quasar dev -m pwa</code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Comandos de Build</h3>
        <pre class="code"><code># Build para producción (SPA)
quasar build

# Build para PWA
quasar build -m pwa

# Build para Cordova (mobile)
quasar build -m cordova

# Build para Electron (desktop)
quasar build -m electron

# Build para SSR
quasar build -m ssr</code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Otros Comandos Útiles</h3>
        <pre class="code"><code># Agregar un modo (PWA, Cordova, Electron)
quasar mode add pwa

# Agregar un icono set
quasar ext add @quasar/icon-set

# Crear un nuevo componente
quasar new component MiComponente

# Crear un nuevo layout
quasar new layout MiLayout

# Crear una nueva p&amp;aacute;gina
quasar new page MiPagina

# Crear un store
quasar new store MiStore</code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Ejemplo Práctico: Primer Componente</h2>
      <p class="p">
        Veamos cómo crear y usar componentes en Quasar:
      </p>

      <div class="code-block">
        <h3 class="code-title">Crear un Componente</h3>
        <pre class="code"><code># Crear un nuevo componente
quasar new component MiBoton

# Esto crea: src/components/MiBoton.vue</code></pre>
      </div>

      <div class="code-block">
        <h3 class="code-title">Componente Quasar Básico</h3>
        <pre class="code"><code>&lt;template&gt;
  &lt;div class=&quot;q-pa-md&quot;&gt;
    &lt;q-btn 
      color=&quot;primary&quot;
      label=&quot;Mi Bot&amp;oacute;n Quasar&quot;
      @click=&quot;handleClick&quot;
      icon=&quot;favorite&quot;
    /&gt;
    
    &lt;q-card class=&quot;q-mt-md&quot;&gt;
      &lt;q-card-section&gt;
        &lt;div class=&quot;text-h6&quot;&gt;{{ title }}&lt;/div&gt;
        &lt;div class=&quot;text-subtitle2&quot;&gt;{{ subtitle }}&lt;/div&gt;
      &lt;/q-card-section&gt;
      
      &lt;q-card-actions align=&quot;right&quot;&gt;
        &lt;q-btn flat label=&quot;Acci&amp;oacute;n 1&quot; color=&quot;primary&quot; /&gt;
        &lt;q-btn flat label=&quot;Acci&amp;oacute;n 2&quot; color=&quot;primary&quot; /&gt;
      &lt;/q-card-actions&gt;
    &lt;/q-card&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &amp;apos;vue&amp;apos;
import { useQuasar } from &amp;apos;quasar&amp;apos;

const $q = useQuasar()

const title = ref(&amp;apos;T&amp;iacute;tulo de la Tarjeta&amp;apos;)
const subtitle = ref(&amp;apos;Subt&amp;iacute;tulo descriptivo&amp;apos;)

const handleClick = () =&amp;gt; {
  $q.notify({
    message: &amp;apos;&amp;iexcl;Bot&amp;oacute;n clickeado!&amp;apos;,
    color: &amp;apos;positive&amp;apos;,
    position: &amp;apos;top&amp;apos;
  })
}
&lt;/script&gt;

&lt;style scoped&gt;
/* Estilos personalizados */
</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">Demo: Componentes Quasar</h3>
        <div class="p">
          <div class="q-pa-md demo-quasar">
            <q-btn color="primary" label="Botón Primario" class="q-mr-sm" />
            <q-btn color="secondary" label="Botón Secundario" class="q-mr-sm" />
            <q-btn color="positive" label="Éxito" class="q-mr-sm" />
            <q-btn color="negative" label="Error" />
          </div>
          <p class="q-mt-md">Estos son ejemplos de componentes Quasar integrados.</p>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Configuración: quasar.conf.js</h2>
      <p class="p">
        El archivo <code>quasar.conf.js</code> es el corazón de la configuración de Quasar.
      </p>

      <div class="code-block">
        <h3 class="code-title">Configuración Básica</h3>
        <pre class="code"><code>module.exports = function (ctx) {
  return {
    // Application boot file
    boot: [
      &amp;apos;axios&amp;apos;,
      &amp;apos;i18n&amp;apos;
    ],

    // CSS framework
    framework: {
      iconSet: &amp;apos;material-icons&amp;apos;,
      lang: &amp;apos;es&amp;apos;,
      config: {
        dark: false // habilitar modo oscuro
      }
    },

    // Animaciones CSS
    animations: [],

    // Build configuration
    build: {
      vueRouterMode: &amp;apos;hash&amp;apos;, // o &amp;apos;history&amp;apos;
      extendWebpack (cfg) {
        // Extender webpack config
      }
    },

    // Dev server configuration
    devServer: {
      https: false,
      port: 8080,
      open: true // abrir navegador autom&amp;aacute;ticamente
    },

    // PWA configuration
    pwa: {
      workboxPluginMode: &amp;apos;GenerateSW&amp;apos;,
      workboxOptions: {},
      manifest: {
        name: &amp;apos;Mi Aplicaci&amp;oacute;n Quasar&amp;apos;,
        short_name: &amp;apos;MiApp&amp;apos;,
        description: &amp;apos;Una aplicaci&amp;oacute;n incre&amp;iacute;ble con Quasar&amp;apos;,
        display: &amp;apos;standalone&amp;apos;,
        orientation: &amp;apos;portrait&amp;apos;,
        background_color: &amp;apos;#ffffff&amp;apos;,
        theme_color: &amp;apos;#027be3&amp;apos;
      }
    }
  }
}</code></pre>
      </div>

      <hr />

      <h2 class="subtitle">Despliegue en Producción</h2>
      <p class="p">
        Quasar facilita el despliegue en diferentes entornos:
      </p>

      <div class="code-block">
        <h3 class="code-title">Build para Producción</h3>
        <pre class="code"><code># Build para SPA (Single Page Application)
quasar build

# Los archivos se generan en dist/spa/
# Puedes desplegar en Netlify, Vercel, GitHub Pages, etc.

# Build para PWA
quasar build -m pwa
# Archivos en dist/pwa/

# Build para SSR
quasar build -m ssr
# Archivos en dist/ssr/

# Build para Cordova (Android/iOS)
quasar build -m cordova -T android
# Archivos en src-cordova/platforms/android/app/build/outputs/</code></pre>
      </div>

      <div class="example">
        <h3 class="example-title">🌐 Plataformas de Despliegue</h3>
        <ul>
          <li class="p"><strong>SPA:</strong> Netlify, Vercel, GitHub Pages, Firebase Hosting</li>
          <li class="p"><strong>PWA:</strong> Mismas que SPA + App Stores (via TWA)</li>
          <li class="p"><strong>SSR:</strong> Servidor Node.js, VPS, Cloud</li>
          <li class="p"><strong>Mobile:</strong> Google Play Store, Apple App Store</li>
          <li class="p"><strong>Desktop:</strong> Distribución directa o stores</li>
        </ul>
      </div>

      <hr />

      <h2 class="subtitle">Flujo de Trabajo Recomendado</h2>

      <div class="lifecycle-flow">
        <div class="flow-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Instalación</h4>
            <p>Instalar Quasar CLI globalmente</p>
          </div>
        </div>
        <div class="flow-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Creación</h4>
            <p><code>quasar create mi-proyecto</code></p>
          </div>
        </div>
        <div class="flow-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Desarrollo</h4>
            <p><code>quasar dev</code> con hot-reload</p>
          </div>
        </div>
        <div class="flow-step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Testing</h4>
            <p>Probar en diferentes modos y plataformas</p>
          </div>
        </div>
        <div class="flow-step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>Build</h4>
            <p><code>quasar build</code> para producción</p>
          </div>
        </div>
        <div class="flow-step">
          <div class="step-number">6</div>
          <div class="step-content">
            <h4>Despliegue</h4>
            <p>Desplegar en la plataforma elegida</p>
          </div>
        </div>
      </div>

      <hr />

      <h2 class="subtitle">Ventajas de Usar Quasar</h2>
      <ul>
        <li class="p"><strong>🚀 Productividad:</strong> Desarrollo rápido con componentes pre-construidos</li>
        <li class="p"><strong>📱 Multiplataforma:</strong> Un código para web, mobile y desktop</li>
        <li class="p"><strong>🎨 Diseño Consistente:</strong> Material Design por defecto</li>
        <li class="p"><strong>⚡ Performance:</strong> Optimizado y tree-shaking automático</li>
        <li class="p"><strong>🛠️ Tooling Completo:</strong> CLI poderosa con todos los modos integrados</li>
        <li class="p"><strong>📚 Documentación Excelente:</strong> Guías completas y ejemplos</li>
        <li class="p"><strong>👥 Comunidad Activa:</strong> Soporte y plugins de la comunidad</li>
      </ul>

      <div class="example">
        <h3 class="example-title">✅ Listo para Empezar</h3>
        <p class="p">
          Con Quasar tienes todo lo necesario para crear aplicaciones modernas, responsive y multiplataforma. ¡Es hora de empezar tu primer proyecto!
        </p>
      </div>

    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Estado para ejemplos interactivos
const demoActive = ref(true)
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
  color: #1976d2; /* Color primario de Quasar */
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

/* Demo Quasar Styles */
.demo-quasar {
  background: white;
  border-radius: 0.5rem;
  border: 2px solid #e5e7eb;
}

/* Lifecycle Flow */
.lifecycle-flow {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
}
.flow-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.step-number {
  background: #1976d2;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.step-content h4 {
  margin: 0;
  color: #1f2937;
}
.step-content p {
  margin: 0.25rem 0;
  color: #6b7280;
}

/* Quasar-like button styles for demo */
.q-pa-md {
  padding: 16px;
}
.q-mr-sm {
  margin-right: 8px;
}
.q-mt-md {
  margin-top: 16px;
}

/* Demo button styles */
.demo-button {
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
  margin-bottom: 8px;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
}
.demo-button:hover {
  background-color: #1565c0;
}

.demo-button.primary { background-color: #1976d2; }
.demo-button.secondary { background-color: #26a69a; }
.demo-button.positive { background-color: #21ba45; }
.demo-button.negative { background-color: #c10015; }

@media (max-width: 768px) {
  .content {
    width: 95%;
  }
  .flow-step {
    flex-direction: column;
    text-align: center;
  }
}
</style>