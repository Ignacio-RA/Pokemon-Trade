# 🎮 Pokemon Trade

**Una plataforma segura para comprar, vender e intercambiar Pokémon.**

---

## 📚 Documentación

### Para Usuarios
- 🚀 [**Quick Start**](documentacion/QUICK_START.md) - Comienza en 5 minutos
- 📖 [**Guía de Usuario Completa**](documentacion/GUIA_USUARIO.md) - Manual detallado
- 📊 [**Casos de Uso**](documentacion/CASOS_DE_USO.md) - Ejemplos prácticos
- 📋 [**Información General**](documentacion/INFORMACION_GENERAL.md) - Características y políticas

### Para Administradores
- 🛠️ [**Instalación y Configuración**](documentacion/INSTALACION_CONFIGURACION.md) - Setup del proyecto

### Diagramas y Visuales
- 🎨 [**Prompts para Diagramas**](PROMPTS_DIAGRAMAS.md) - Diagramas y guías visuales

---

## 🚀 Inicio Rápido

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd pokemon-trade

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones de BD

# 4. Crear la base de datos
# Ejecutar los scripts SQL en tu servidor MySQL/MariaDB

# 5. Iniciar el servidor
npm run inicio

# 6. Abrir en navegador
# http://localhost:3000
```

---

## 🎯 Características Principales

✨ **Registro de Usuarios** - Crea tu cuenta de forma segura
🛍️ **Compra de Pokémon** - Busca y compra Pokémon de otros usuarios
📦 **Venta de Pokémon** - Registra y vende tus Pokémon
💼 **Gestión de Transacciones** - Aprueba o rechaza compras
🔐 **Sistema Seguro** - Contraseñas encriptadas y sesiones protegidas
📱 **Interfaz Responsiva** - Funciona en desktop y móvil

---

## ⚡ Requisitos del Sistema

### Requisitos Mínimos
- **Node.js** v16.0.0 o superior
- **MySQL** v8.0 o **MariaDB** v10.0 o superior
- **npm** v7.0.0 o superior
- **Sistema Operativo**: Linux, macOS, Windows

### Memoria y Almacenamiento
- **RAM**: 512MB mínimo, 1GB recomendado
- **Disco**: 100MB para la aplicación + espacio para imágenes de Pokémon

---

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución para JavaScript
- **Express** - Framework para servidor web
- **Sequelize** - ORM para base de datos
- **bcrypt** - Encriptación de contraseñas
- **JWT** - Autenticación

### Base de Datos
- **MySQL / MariaDB** - Base de datos relacional

### Frontend
- **Pug** - Motor de plantillas
- **Bootstrap** - Framework CSS
- **jQuery** - JavaScript interactivo

### Herramientas
- **Multer** - Carga de archivos
- **Express-session** - Gestión de sesiones
- **Nodemon** - Desarrollo automático

---

## 📁 Estructura del Proyecto

```
pokemon-trade/
├── config/                  # Configuración
│   └── db.js               # Conexión a BD
├── controllers/             # Lógica de negocio
│   ├── inicioController.js
│   └── loginController.js
├── documentacion/           # Documentación completa
│   ├── DOCUMENTACION_INDEX.md
│   ├── GUIA_USUARIO.md
│   ├── INSTALACION_CONFIGURACION.md
│   ├── CASOS_DE_USO.md
│   ├── INFORMACION_GENERAL.md
│   └── QUICK_START.md
├── middlewares/             # Funciones intermedias
│   ├── auth.js
│   └── subirImagen.js
├── models/                  # Modelos de datos
│   ├── usuario.js
│   ├── pokemon.js
│   ├── venta.js
│   └── relaciones.js
├── routes/                  # Rutas de la aplicación
│   ├── inicio_routes.js
│   └── login_routes.js
├── views/                   # Plantillas HTML (Pug)
│   ├── inicio.pug
│   ├── credenciales/
│   ├── pokemon/
│   ├── usr/
│   ├── venta/
│   └── layout/
├── public/                  # Archivos estáticos
│   ├── css/
│   ├── js/
│   └── uploads/pokemon/
├── PROMPTS_DIAGRAMAS.md    # Prompts para generar diagramas
├── index.js                 # Archivo principal
├── package.json             # Dependencias
└── README.md                # Este archivo
```

---

## 👥 Roles de Usuario

### Comprador
- Ver catálogo de Pokémon
- Comprar Pokémon
- Historial de compras
- Gestionar transacciones

### Vendedor
- Registrar Pokémon para venta
- Ajustar precios
- Aprobar/Rechazar compras
- Historial de ventas

### Administrador
- Crear/Eliminar usuarios
- Gestionar base de datos
- Soporte y resolución de disputes

---

## 🔐 Seguridad

✅ Contraseñas encriptadas con bcrypt
✅ Sesiones seguras con express-session
✅ Validación de datos en servidor
✅ Protección contra inyección SQL (Sequelize)
✅ Carga de archivos validada

---

## 📝 Dependencias Principales

```json
{
  "express": "^5.2.1",
  "sequelize": "^6.37.8",
  "mysql2": "^3.20.0",
  "bcrypt": "^6.0.0",
  "express-session": "^1.19.0",
  "multer": "^2.1.1",
  "pug": "^3.0.4",
  "jsonwebtoken": "^9.0.3",
  "dotenv": "^17.3.1"
}
```

---

## 🚀 Scripts Disponibles

```bash
npm run inicio          # Iniciar servidor con nodemon (desarrollo)
npm test               # Ejecutar pruebas (próximamente)
```

---

## 🌐 URLs Principales

- `/` - Página de login
- `/inicio` - Panel principal
- `/inicio/lista-pokemon` - Catálogo de Pokémon
- `/inicio/lista-mis-pokemon` - Mis Pokémon
- `/inicio/alta-pokemon` - Registrar nuevo Pokémon
- `/inicio/transacciones` - Gestionar transacciones
- `/logout` - Cerrar sesión

---

## 📞 Soporte

**Documentación Completa:**
- 📖 [Guía de Usuario](documentacion/GUIA_USUARIO.md)
- 🛠️ [Instalación](documentacion/INSTALACION_CONFIGURACION.md)
- 📊 [Casos de Uso](documentacion/CASOS_DE_USO.md)
- 🎨 [Diagramas](PROMPTS_DIAGRAMAS.md)

**Contacto:**
- 📧 Email: soporte@pokemontrade.com
- 💬 Issues: [GitHub Issues](issues)

---

## � Estado del Proyecto

### ✅ Funcionalidades Implementadas
- ✅ Sistema de autenticación de usuarios
- ✅ Registro y gestión de Pokémon
- ✅ Sistema de compra/venta de Pokémon
- ✅ Gestión de transacciones
- ✅ Interfaz responsiva con Bootstrap
- ✅ Carga de imágenes de Pokémon
- ✅ Documentación completa

### 🚧 Próximas Funcionalidades
- 🔄 Sistema de notificaciones
- 🔄 API REST para integraciones
- 🔄 Sistema de reseñas y calificaciones
- 🔄 Dashboard administrativo avanzado
- 🔄 Soporte para múltiples idiomas

### 🧪 Testing
- 🟡 Pruebas unitarias (próximamente)
- 🟡 Pruebas de integración (próximamente)
- 🟡 Pruebas end-to-end (próximamente)

ISC License - Ver LICENSE para más detalles

---

## 👨‍💻 Desarrollador

**Los IA Boys** - Equipo de desarrollo
*Última actualización: Abril 2026*

---

## 🎮 ¿Listo para empezar?

1. Lee el [Quick Start](documentacion/QUICK_START.md)
2. Sigue la [Guía de Usuario](documentacion/GUIA_USUARIO.md)
3. ¡Comienza a comprar y vender Pokémon!

---

**Pokemon Trade - ¡Tu plataforma de confianza para Pokémon!** ✨