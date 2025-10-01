<template>
  <div class="father">
    <section class="content">
      <!-- Header -->
      <div class="text-center q-mb-xl">
        <q-avatar size="80px" class="q-mb-md">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" alt="Quasar Logo">
        </q-avatar>
        <h1 class="title">Crear Nuevo Proyecto Quasar</h1>
        <p class="p">
          Configura tu aplicación con <strong>Quasar Framework</strong> - Un framework Vue.js de alto rendimiento
        </p>
      </div>

      <hr />

      <!-- Información Básica -->
      <h2 class="subtitle">📋 Información del Proyecto</h2>
      <p class="p">
        Define la información básica de tu proyecto. El <strong>nombre del proyecto</strong> será usado para crear la carpeta y configuración inicial.
      </p>

      <div class="example">
        <div class="demo-container">
          <q-form @submit="createProject" class="full-width">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-input
                  v-model="projectData.name"
                  label="Nombre del Proyecto *"
                  placeholder="mi-aplicacion-quasar"
                  :rules="[val => !!val || 'El nombre es requerido']"
                  filled
                  class="q-mb-md"
                />
              </div>
              
              <div class="col-12 col-md-6">
                <q-input
                  v-model="projectData.description"
                  label="Descripción"
                  placeholder="Una aplicación increíble con Quasar"
                  filled
                  class="q-mb-md"
                />
              </div>
            </div>

            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-input
                  v-model="projectData.author"
                  label="Autor"
                  placeholder="Tu nombre"
                  filled
                  class="q-mb-md"
                />
              </div>
              
              <div class="col-12 col-md-6">
                <q-input
                  v-model="projectData.version"
                  label="Versión"
                  placeholder="1.0.0"
                  filled
                  class="q-mb-md"
                />
              </div>
            </div>
          </q-form>
        </div>
      </div>

      <hr />

      <!-- Características de Quasar -->
      <h2 class="subtitle">✨ Características de Quasar</h2>
      <p class="p">
        Selecciona las <strong>características</strong> que quieres incluir en tu proyecto. Quasar soporta múltiples integraciones por defecto.
      </p>

      <div class="example">
        <h3 class="example-title">Características Disponibles</h3>
        <div class="demo-container">
          <div class="row q-col-gutter-sm">
            <div 
              v-for="feature in availableFeatures" 
              :key="feature.name"
              class="col-12 col-sm-6 col-md-4"
            >
              <q-card 
                class="feature-card cursor-pointer q-pa-sm"
                :class="{ 'selected': projectData.features.includes(feature.name) }"
                @click="toggleFeature(feature.name)"
              >
                <q-card-section class="text-center q-pa-sm">
                  <q-icon :name="feature.icon" size="sm" class="q-mb-xs" />
                  <div class="text-subtitle2">{{ feature.label }}</div>
                  <q-checkbox 
                    v-model="projectData.features" 
                    :val="feature.name" 
                    class="hidden"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <!-- Modos de Build -->
      <h2 class="subtitle">🌍 Modos de Build</h2>
      <p class="p">
        Quasar soporta múltiples <strong>modos de build</strong> desde una misma base de código. Selecciona los que necesites.
      </p>

      <div class="example">
        <h3 class="example-title">Plataformas Soportadas</h3>
        <div class="demo-container">
          <div class="row q-col-gutter-sm">
            <div 
              v-for="mode in buildModes" 
              :key="mode.name"
              class="col-12 col-sm-6 col-md-4"
            >
              <q-card 
                class="build-mode-card cursor-pointer q-pa-sm"
                :class="{ 'selected': projectData.buildModes.includes(mode.name) }"
                @click="toggleBuildMode(mode.name)"
              >
                <q-card-section class="text-center q-pa-sm">
                  <q-icon :name="mode.icon" size="sm" class="q-mb-xs" />
                  <div class="text-subtitle2">{{ mode.label }}</div>
                  <q-checkbox 
                    v-model="projectData.buildModes" 
                    :val="mode.name" 
                    class="hidden"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <!-- Preprocesador CSS -->
      <h2 class="subtitle">🎨 Preprocesador CSS</h2>
      <p class="p">
        Selecciona el <strong>preprocesador CSS</strong> que prefieres usar en tu proyecto.
      </p>

      <div class="example">
        <h3 class="example-title">Opciones Disponibles</h3>
        <div class="demo-container">
          <q-option-group
            :options="cssPreprocessors"
            type="radio"
            v-model="projectData.cssPreprocessor"
            class="q-mt-md"
          />
        </div>
      </div>

      <hr />

      <!-- Comando Generado -->
      <h2 class="subtitle">💻 Comando de Creación</h2>
      <p class="p">
        Este es el comando que se ejecutará para crear tu proyecto basado en tu configuración.
      </p>

      <div class="example">
        <div class="demo-container full-width">
          <div class="code-block">
            <pre class="code"><code>{{ generatedCommand }}</code></pre>
          </div>
        </div>
      </div>

      <!-- Botones de Acción -->
      <div class="text-center q-mt-xl">
        <q-btn 
          label="Cancelar" 
          color="grey" 
          flat 
          class="q-mr-md"
          @click="$router.back()"
        />
        <q-btn 
          label="Crear Proyecto" 
          color="primary" 
          icon="rocket_launch"
          @click="createProject"
          :loading="loading"
          size="lg"
        >
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            Creando proyecto...
          </template>
        </q-btn>
      </div>
    </section>

    <!-- Diálogo de Confirmación -->
    <q-dialog v-model="showConfirmation" persistent>
      <q-card style="min-width: 400px">
        <q-card-section class="row items-center">
          <q-avatar icon="check_circle" color="positive" text-color="white" />
          <span class="q-ml-sm text-h6">¡Proyecto Creado Exitosamente!</span>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Tu proyecto <strong>{{ projectData.name }}</strong> ha sido creado con las siguientes características:</p>
          <ul>
            <li v-for="feature in projectData.features" :key="feature">
              {{ getFeatureLabel(feature) }}
            </li>
            <li>Modos de build: {{ projectData.buildModes.map(mode => getBuildModeLabel(mode)).join(', ') }}</li>
            <li>Preprocesador CSS: {{ getCssPreprocessorLabel(projectData.cssPreprocessor) }}</li>
          </ul>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Abrir en VS Code" color="primary" v-close-popup />
          <q-btn flat label="Explorar Archivos" color="primary" v-close-popup />
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: 'ProjectCreationGuide',
  
  setup() {
    const $q = useQuasar()
    const loading = ref(false)
    const showConfirmation = ref(false)

    // Datos del proyecto
    const projectData = ref({
      name: 'mi-proyecto-quasar',
      description: 'Una aplicación increíble construida con Quasar',
      author: '',
      version: '1.0.0',
      features: ['vuex', 'router', 'pwa'],
      buildModes: ['spa', 'pwa'],
      cssPreprocessor: 'scss'
    })

    // Opciones disponibles
    const availableFeatures = [
      { name: 'typescript', label: 'TypeScript', icon: 'code' },
      { name: 'vuex', label: 'Vuex', icon: 'storage' },
      { name: 'router', label: 'Vue Router', icon: 'route' },
      { name: 'i18n', label: 'i18n', icon: 'translate' },
      { name: 'pwa', label: 'PWA', icon: 'install_mobile' },
      { name: 'axios', label: 'Axios', icon: 'http' }
    ]

    const buildModes = [
      { name: 'spa', label: 'SPA', icon: 'public' },
      { name: 'ssr', label: 'SSR', icon: 'cloud' },
      { name: 'pwa', label: 'PWA', icon: 'install_mobile' },
      { name: 'cordova', label: 'Cordova', icon: 'phone_android' },
      { name: 'capacitor', label: 'Capacitor', icon: 'phone_iphone' },
      { name: 'electron', label: 'Electron', icon: 'desktop_windows' }
    ]

    const cssPreprocessors = [
      { label: 'SCSS (Recomendado)', value: 'scss' },
      { label: 'SASS', value: 'sass' },
      { label: 'Stylus', value: 'stylus' },
      { label: 'CSS estándar', value: 'css' }
    ]

    // Computed
    const generatedCommand = computed(() => {
      const base = `quasar create ${projectData.value.name}`
      const features = projectData.value.features.length > 0 
        ? `--features ${projectData.value.features.join(',')}` 
        : ''
      return `${base} ${features}`.trim()
    })

    // Métodos
    const toggleFeature = (feature) => {
      const index = projectData.value.features.indexOf(feature)
      if (index > -1) {
        projectData.value.features.splice(index, 1)
      } else {
        projectData.value.features.push(feature)
      }
    }

    const toggleBuildMode = (mode) => {
      const index = projectData.value.buildModes.indexOf(mode)
      if (index > -1) {
        projectData.value.buildModes.splice(index, 1)
      } else {
        projectData.value.buildModes.push(mode)
      }
    }

    const getFeatureLabel = (featureName) => {
      const feature = availableFeatures.find(f => f.name === featureName)
      return feature ? feature.label : featureName
    }

    const getBuildModeLabel = (modeName) => {
      const mode = buildModes.find(m => m.name === modeName)
      return mode ? mode.label : modeName
    }

    const getCssPreprocessorLabel = (preprocessorName) => {
      const preprocessor = cssPreprocessors.find(p => p.value === preprocessorName)
      return preprocessor ? preprocessor.label : preprocessorName
    }

    const createProject = async () => {
      loading.value = true
      
      // Simulación de creación de proyecto
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      loading.value = false
      showConfirmation.value = true
      
      $q.notify({
        type: 'positive',
        message: `Proyecto "${projectData.value.name}" creado exitosamente!`,
        position: 'top-right',
        timeout: 5000
      })
    }

    return {
      loading,
      showConfirmation,
      projectData,
      availableFeatures,
      buildModes,
      cssPreprocessors,
      generatedCommand,
      toggleFeature,
      toggleBuildMode,
      getFeatureLabel,
      getBuildModeLabel,
      getCssPreprocessorLabel,
      createProject
    }
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
pre.code code {
  white-space: pre;
  color: #e5e7eb;
}
.code-block {
  margin-top: 1rem;
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
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

/* Cards de características y modos de build */
.feature-card, .build-mode-card {
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.feature-card:hover, .build-mode-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.feature-card.selected, .build-mode-card.selected {
  border-color: #42b883;
  background-color: #f0f9f4;
}

.hidden {
  display: none;
}

@media (max-width: 768px) {
  .content {
    width: 95%;
  }
  .demo-container {
    align-items: stretch;
  }
}
</style>