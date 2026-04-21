# 🚀 Guía de Instalación y Configuración - Pokemon Trade

Esta guía está dirigida a usuarios administradores o técnicos que necesitan instalar y configurar la aplicación.

---

## 📋 Tabla de Contenidos

1. [Requisitos del Sistema](#requisitos-del-sistema)
2. [Instalación](#instalación)
3. [Configuración Inicial](#configuración-inicial)
4. [Iniciar la Aplicación](#iniciar-la-aplicación)
5. [Solución de Problemas](#solución-de-problemas)

---

## 🖥️ Requisitos del Sistema

### Software Requerido

| Componente | Versión Mínima | Descripción |
|-----------|-----------------|------------|
| **Node.js** | 14.0+ | Entorno de ejecución de JavaScript |
| **npm** | 6.0+ | Gestor de paquetes de Node.js |
| **MySQL** o **MariaDB** | 5.7+ | Sistema de base de datos relacional |
| **Git** | 2.0+ | Control de versiones (opcional pero recomendado) |

### Hardware Recomendado

- **CPU**: Procesador moderno (Intel i5 o equivalente)
- **RAM**: Mínimo 2 GB, recomendado 4 GB
- **Disco Duro**: Mínimo 500 MB de espacio libre
- **Conexión**: Conexión a internet estable

### Navegadores Soportados

- ✅ Google Chrome 90+
- ✅ Mozilla Firefox 88+
- ✅ Safari 14+
- ✅ Microsoft Edge 90+

---

## 📥 Instalación

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/losIAboys/Pokemon-Trade.git
cd Pokemon-Trade
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

Este comando descargará e instalará todas las librerías necesarias.

Dependencias principales que se instalarán:
- **express**: Framework web
- **sequelize**: ORM para base de datos
- **mysql2/mariadb**: Conectores de base de datos
- **express-session**: Gestión de sesiones
- **multer**: Carga de archivos
- **bcrypt**: Encriptación de contraseñas
- **jsonwebtoken**: Autenticación con JWT
- **pug**: Motor de plantillas

### Paso 3: Configurar Variables de Entorno

1. En la raíz del proyecto, crea un archivo `.env`
2. Añade las siguientes variables:

```env
# Base de Datos
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=pokemon_trade
DB_PORT=3306

# Servidor
PORT=3000
NODE_ENV=development

# Sesión
SESSION_SECRET=mi_secreto_super_seguro

# JWT
JWT_SECRET=tu_jwt_secret
JWT_EXPIRY=7d

# Carga de Archivos
UPLOAD_DIR=./public/uploads/pokemon/
MAX_FILE_SIZE=5242880
```

### Paso 4: Crear Base de Datos

1. Abre tu cliente MySQL/MariaDB
2. Ejecuta los siguientes comandos:

```sql
CREATE DATABASE pokemon_trade;
USE pokemon_trade;
```

La aplicación creará automáticamente las tablas al iniciar.

---

## ⚙️ Configuración Inicial

### Paso 1: Crear Usuario Administrador

Después de la primera instalación, crea un usuario administrador:

1. Accede a http://localhost:3000
2. Navega a la página de registro
3. Crea un usuario con:
   - **Correo**: admin@example.com
   - **Contraseña**: Una contraseña segura
   - **Rol**: Admin o Administrador

### Paso 2: Configurar Carga de Archivos

Verifica que existan los siguientes directorios:

```
/public/uploads/pokemon/
```

Si no existen, créalos manualmente:

```bash
mkdir -p public/uploads/pokemon
chmod 755 public/uploads/pokemon
```

### Paso 3: Pruebas Iniciales

1. Registra 2-3 usuarios de prueba
2. Crea algunos Pokémon de ejemplo
3. Realiza una transacción de prueba
4. Verifica que todo funciona correctamente

---

## ▶️ Iniciar la Aplicación

### Modo Desarrollo

```bash
npm run inicio
```

Esto iniciará el servidor con **nodemon**, que reinicia automáticamente cuando detecta cambios.

**Salida esperada:**
```
Conexion exitosa a la b.d
[Servidor escuchando en puerto 3000]
```

### Acceder a la Aplicación

Abre tu navegador y ve a:

```
http://localhost:3000
```

### Detener la Aplicación

Presiona `Ctrl + C` en la terminal.

### Modo Producción

```bash
NODE_ENV=production node index.js
```

---

## 🔧 Estructura de Proyecto Importante

```
pokemon-trade/
├── config/              # Configuración
│   └── db.js           # Conexión a base de datos
├── controllers/         # Lógica de negocio
│   ├── inicioController.js
│   └── loginController.js
├── middlewares/         # Funciones intermedias
│   ├── auth.js         # Autenticación
│   └── subirImagen.js  # Carga de imágenes
├── models/             # Modelos de datos
│   ├── usuario.js
│   ├── pokemon.js
│   ├── venta.js
│   └── relaciones.js
├── routes/             # Definición de rutas
│   ├── inicio_routes.js
│   └── login_routes.js
├── views/              # Plantillas Pug
├── public/             # Archivos estáticos
│   ├── css/
│   ├── js/
│   └── uploads/
├── index.js            # Archivo principal
└── package.json        # Dependencias
```

---

## 🆘 Solución de Problemas

### Problema: "Cannot find module 'express'"

**Solución:**
```bash
npm install
```

### Problema: "ECONNREFUSED - Error de conexión a BD"

**Verificar:**
- ✅ MySQL/MariaDB está ejecutándose
- ✅ Credenciales en `.env` son correctas
- ✅ Base de datos fue creada
- ✅ Usuario DB tiene permisos

**Comando para verificar MySQL:**
```bash
mysql -u root -p
```

### Problema: "Port 3000 already in use"

**Soluciones:**
1. Cambiar puerto en `.env`:
   ```env
   PORT=3001
   ```

2. O matar el proceso existente:
   ```bash
   lsof -i :3000
   kill -9 [PID]
   ```

### Problema: Las imágenes no se cargan

**Verificar:**
- ✅ Directorio `public/uploads/pokemon/` existe
- ✅ Permisos correctos: `chmod 755 public/uploads/pokemon`
- ✅ Ruta en `.env` es correcta

### Problema: Las sesiones no se mantienen

**Soluciones:**
- Limpiar cookies del navegador
- Cambiar `SESSION_SECRET` en `.env`
- Reiniciar servidor

### Problema: "Error en carga de archivo"

**Verificar:**
- ✅ Limitar tamaño: `MAX_FILE_SIZE=5242880` (5MB)
- ✅ Tipos permitidos (JPG, PNG)
- ✅ Permisos de escritura en carpeta uploads

---

## 🔒 Consideraciones de Seguridad

### Contraseña de Base de Datos

```env
db_password=ChaveSuperSegura123!@#
```

✅ Usa contraseñas fuertes en producción

### Variable SESSION_SECRET

```env
SESSION_SECRET=$(openssl rand -hex 32)
```

✅ Genera una clave aleatoria y segura

### Node Environment

```env
NODE_ENV=production
```

✅ En producción, siempre usa este valor

### HTTPS

En producción, configura HTTPS usando certificados SSL/TLS.

---

## 📊 Verificar la Instalación

Ejecuta los siguientes comandos para verificar que todo está bien:

```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar MySQL
mysql --version

# Verificar que las dependencias se instalaron
npm list --depth=0
```

---

## 📝 Archivo .gitignore

Asegúrate de que el archivo `.gitignore` incluya:

```
node_modules/
.env
.env.local
public/uploads/pokemon/*
*.log
.DS_Store
```

---

## ✅ Checklist de Instalación

Completa estos puntos para una instalación exitosa:

- [ ] Node.js y npm instalados
- [ ] Repositorio clonado
- [ ] Dependencias instaladas con `npm install`
- [ ] Archivo `.env` creado y configurado
- [ ] Base de datos creada
- [ ] Directorio de uploads existe con permisos
- [ ] Usuario administrador creado
- [ ] Aplicación inicia sin errores
- [ ] Navegador accede a http://localhost:3000
- [ ] Login funciona correctamente

---

## 🆘 Soporte Técnico

Si encuentras problemas:

1. Revisa los logs en la consola
2. Consulta la sección "Solución de Problemas"
3. Contacta al equipo de desarrollo

---

**¡Instalación completada! Ahora puedes usar Pokemon Trade.** 🎮✨
