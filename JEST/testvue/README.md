# TestVue

Este proyecto está configurado para realizar pruebas unitarias en una aplicación Vue.js utilizando Jest como framework de testing.

## Estructura del Proyecto

```
testvue/
├── src/                    # Código fuente principal
│   ├── main.js            # Punto de entrada de la aplicación
│   ├── App.vue            # Componente raíz
│   ├── assets/            # Recursos estáticos (imágenes, etc.)
│   └── components/        # Componentes Vue
│       └── HelloWorld.vue # Componente de ejemplo
│
├── tests/                 # Directorio de pruebas
│   └── unit/             # Pruebas unitarias
│       ├── app.spec.js   # Pruebas para App.vue
│       └── example.spec.js# Pruebas de ejemplo
│
├── public/               # Archivos públicos
│   └── index.html       # Página HTML principal
│
├── .browserslistrc      # Configuración de compatibilidad de navegadores
├── .eslintrc.js         # Configuración de ESLint
├── babel.config.js      # Configuración de Babel
├── jest.config.js       # Configuración de Jest
├── jsconfig.json        # Configuración de JavaScript
├── package.json         # Dependencias y scripts
└── vue.config.js        # Configuración de Vue CLI
```

## Archivos de Configuración

- `.browserslistrc`: Define los navegadores soportados
- `.eslintrc.js`: Reglas de linting para mantener la calidad del código
- `babel.config.js`: Configuración de transpilación de JavaScript
- `jest.config.js`: Configuración del framework de testing
- `jsconfig.json`: Configuración para el soporte de JavaScript en el editor
- `vue.config.js`: Configuración específica de Vue.js

## Directorios Principales

### src/
Contiene el código fuente de la aplicación:
- `main.js`: Inicialización de la aplicación Vue
- `App.vue`: Componente principal
- `components/`: Componentes reutilizables

### tests/
Contiene las pruebas unitarias:
- `unit/`: Pruebas unitarias escritas con Jest
- `app.spec.js`: Pruebas del componente App
- `example.spec.js`: Ejemplos de pruebas

### public/
Contiene archivos estáticos que se servirán directamente:
- `index.html`: Plantilla HTML principal

## Comandos del Proyecto

### Configuración inicial
```
npm install
```

### Desarrollo
```
npm run serve
```

### Producción
```
npm run build
```

### Pruebas unitarias
```
npm run test:unit
```

### Linting
```
npm run lint
```

### Configuración adicional
Para más detalles sobre la configuración, consulta la [Documentación de Vue CLI](https://cli.vuejs.org/config/).
