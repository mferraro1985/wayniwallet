# WayniWallet Challenge

Aplicación de billetera digital desarrollada para el challenge técnico de Waynimóvil.

## Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework de CSS utilitario
- **React Query** - Manejo de estado del servidor y cache
- **Zustand** - Manejo de estado global
- **Biome** - Linter y formateador de código


## Estructura del Proyecto

```
src/
├── app/                    # Rutas y páginas de Next.js
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes base (Button, Card, etc)
│   ├── profile/          # Componentes específicos de perfil
│   └── transfers/        # Componentes de transferencias
├── hooks/                # Custom hooks
├── provider/             # Providers de React
├── services/             # Servicios y lógica de negocio
├── stores/              # Store de Zustand
├── types/               # Tipos y interfaces de TypeScript
└── utils/               # Utilidades y helpers
```

## Comandos de Ejecución

### Instalación de dependencias
```bash
npm install
# o
yarn install
```

### Desarrollo
```bash
npm run dev
# o
yarn dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### Linting y Formateo
```bash
npm run lint
npm run format
# o
yarn lint
yarn format
```

### Producción
```bash
npm run build
npm run start
# o
yarn build
yarn start
```

## Características Principales

- 💰 Visualización de balance y transacciones
- 👥 Gestión de contactos
- 💸 Transferencias entre usuarios
- 📱 Diseño responsive
- 🎨 Interfaz moderna y amigable
