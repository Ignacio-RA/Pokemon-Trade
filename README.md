# Pokemon Trade - Sistema de Intercambio

Este proyecto es una plataforma web full-stack desarrollada en **Node.js** que permite el registro, visualización e intercambio de Pokémon. La aplicación utiliza una arquitectura robusta basada en contenedores para garantizar un despliegue sencillo y consistente en cualquier entorno de desarrollo.

---

## 1. Arquitectura del Proyecto (MVC)

El sistema implementa el patrón **Modelo-Vista-Controlador** y utiliza **Sequelize** como ORM para la gestión de la base de datos MySQL.

### **Modelos (Capa de Datos)**
* **Usuario (`models/usuario.js`)**: Gestiona la información de los entrenadores, hashing de contraseñas y tokens de verificación.
* **Pokemon (`models/pokemon.js`)**: Almacena las características de los Pokémon: nombre, descripción, precio, categoría y ruta de imagen.
* **Venta/Intercambio (`models/venta.js`)**: Registra las transacciones y el estado de las publicaciones.
* **Relaciones (`models/relaciones.js`)**: Archivo central que define las asociaciones (`HasOne`, `BelongsTo`, etc.) entre las entidades.

### **Controladores y Lógica**
* **inicioController.js**: Procesa la carga del dashboard principal y el filtrado de contenido.
* **loginController.js**: Maneja el ciclo de vida de la sesión (Registro, Login y Confirmación).

### **Seguridad y Multimedia**
* **auth.js**: Middleware de protección de rutas que valida la identidad del usuario.
* **subirImagen.js**: Configuración de `Multer` para la carga y gestión de archivos en `public/uploads`.

---

## 2. Ejecución con Docker

Sigue estos pasos para construir la imagen y poner en marcha el proyecto en cualquier computadora de forma rápida y sencilla.

### **Paso 1: Configuración de Entorno**
Antes de iniciar, es obligatorio tener un archivo `.env` en la raíz del proyecto con la siguiente configuración base:

```env
BD_NOMBRE= db_nombre
BD_USUARIO= usuario
BD_CLAVE= contraseña
BD_DIALEC= 'mysql'
BD_HOST= db
BD_PORT= 3306

APP_PORT=4800
```
### **Paso 2: COnstruir la imagen y levantar contenedores**
Para construir la imagen personalizada de la aplicación (basada en el Dockerfile) y levantar el servicio de base de datos MySQL simultáneamente, ejecuta el siguiente comando en tu terminal:

docker compose up --build

Nota: Este proceso descarga las imágenes base, instala las dependencias de Node.js mediante npm install y prepara el volumen para la persistencia de datos.

----

## 3. Estructura del Proyecto

```text
Pokemon-Trade/
├── config/             # Configuración de Sequelize y conexión a DB
├── controllers/        # Lógica de las rutas (funciones controladoras)
├── init_db/            # Scripts SQL (.sql) para inicialización automática
├── middlewares/        # Validaciones, Auth y gestión de Multer
├── models/             # Definiciones de tablas y lógica del ORM
├── public/             # Recursos accesibles públicamente
│   ├── css/            # Estilos (Tailwind / Custom CSS)
│   ├── js/             # Scripts ejecutados en el cliente
│   └── uploads/        # Directorio de imágenes subidas por usuarios
├── routes/             # Definición de endpoints y rutas de la app
├── views/              # Plantillas de renderizado (Motor Pug)
├── .dockerignore       # Archivos excluidos del contexto de Docker
├── .env                # Variables de entorno (Configuración sensible)
├── Dockerfile          # Instrucciones de construcción para la imagen Node
├── docker-compose.yml  # Orquestador de servicios (App + Base de Datos)
└── package.json        # Dependencias y scripts del proyecto
