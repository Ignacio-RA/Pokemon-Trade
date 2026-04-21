# 📚 Casos de Uso - Pokemon Trade

Ejemplos prácticos de cómo usar Pokemon Trade en diferentes escenarios.

---

## 📋 Tabla de Contenidos

1. [Caso 1: Nuevo Usuario - Primer Acceso](#caso-1-nuevo-usuario---primer-acceso)
2. [Caso 2: Comprador - Buscar y Comprar Pokémon](#caso-2-comprador---buscar-y-comprar-pokémon)
3. [Caso 3: Vendedor - Registrar y Vender](#caso-3-vendedor---registrar-y-vender)
4. [Caso 4: Negociación de Transacción](#caso-4-negociación-de-transacción)
5. [Caso 5: Gestión de Múltiples Pokémon](#caso-5-gestión-de-múltiples-pokémon)

---

## Caso 1: Nuevo Usuario - Primer Acceso

### Escenario
Juan quiere crear una cuenta para empezar a comprar Pokémon.

### Pasos

#### Paso 1: Acceso a la Plataforma
```
1. Juan abre su navegador
2. Navega a: http://localhost:3000
3. Ve la página de Login
```

#### Paso 2: Crear Cuenta
```
Formulario de Registro:
- Correo: juan@example.com
- Contraseña: MiPassword123!
- Rol: Comprador
```

**Botón:** Registrarse

#### Paso 3: Confirmación
```
✅ Cuenta creada exitosamente
→ Redirigido a la página de Login
```

#### Paso 4: Inicio de Sesión
```
Ingresa credenciales:
- Correo: juan@example.com
- Contraseña: MiPassword123!
```

**Botón:** Ingresar

#### Paso 5: Panel Principal
```
✅ Login exitoso
→ Acceso a Dashboard
→ Ve opciones de navegación:
   - Lista de Pokémon
   - Mis Transacciones
   - Perfil
```

### Resultado
Juan ahora puede navegar la plataforma y comprar Pokémon.

---

## Caso 2: Comprador - Buscar y Comprar Pokémon

### Escenario
María busca un Pokémon específico (tipo Fuego) para su colección.

### Pasos

#### Paso 1: Navegar a Lista de Pokémon
```
1. María hace clic en "Lista de Pokémon Disponibles"
2. Se muestra un catálogo con todos los Pokémon a la venta
```

#### Paso 2: Filtrar por Tipo
```
Visualiza información de cada Pokémon:
- Charizard (Fuego, Nivel 45, $150)
- Flareon (Fuego, Nivel 30, $100)
- Arcanine (Fuego, Nivel 50, $200)
```

#### Paso 3: Seleccionar Pokémon
```
María ve "Flareon":
- Tipo: Fuego ✓
- Nivel: 30 ✓
- Precio: $100 (dentro de presupuesto) ✓
- Foto: Clara y de buena calidad ✓
```

#### Paso 4: Ver Detalles
```
Haz clic en "Ver Detalles" o "Comprar"

Información mostrada:
- Nombre: Flareon
- Tipo: Fuego
- Nivel: 30
- Precio: $100
- Vendedor: Pedro (Reputación: ⭐⭐⭐⭐)
- Estado: Disponible
```

#### Paso 5: Confirmar Compra
```
1. Revisa los detalles una vez más
2. Haz clic en "Confirmar Compra"
3. Se envía la solicitud al vendedor
```

#### Paso 6: Esperar Aprobación
```
Estado de transacción: ⏳ Pendiente de Aprobación

María puede:
- Ver sus compras pendientes
- Cancelar la compra (si el vendedor no ha respondido)
- Esperar confirmación del vendedor
```

### Resultado
La compra está en proceso. Cuando Pedro apruebe, María recibirá confirmación.

---

## Caso 3: Vendedor - Registrar y Vender

### Escenario
Carlos quiere vender 3 Pokémon de su colección personal.

### Pasos

#### Paso 1: Acceder a Alta de Pokémon
```
1. Carlos inicia sesión (Rol: Vendedor)
2. Hace clic en "Alta de Pokémon"
3. Se abre el formulario de registro
```

#### Paso 2: Registrar Primer Pokémon - Charizard
```
Formulario:
- Nombre: Charizard
- Tipo: Fuego
- Nivel: 50
- Precio: $200
- Foto: [Sube foto desde su PC]

Botón: Registrar Pokémon
```

**Resultado:** ✅ Charizard registrado exitosamente

#### Paso 3: Registrar Segundo Pokémon - Blastoise
```
Formulario:
- Nombre: Blastoise
- Tipo: Agua
- Nivel: 48
- Precio: $180
- Foto: [Sube foto]

Botón: Registrar Pokémon
```

**Resultado:** ✅ Blastoise registrado exitosamente

#### Paso 4: Registrar Tercer Pokémon - Venusaur
```
Formulario:
- Nombre: Venusaur
- Tipo: Planta
- Nivel: 45
- Precio: $160
- Foto: [Sube foto]

Botón: Registrar Pokémon
```

**Resultado:** ✅ Venusaur registrado exitosamente

#### Paso 5: Ver Mis Pokémon
```
Carlos navega a "Mis Pokémon"

Lista mostrada:
1. Charizard - Fuego, Nivel 50, $200 (Disponible)
2. Blastoise - Agua, Nivel 48, $180 (Disponible)
3. Venusaur - Planta, Nivel 45, $160 (Disponible)

Total de Pokémon: 3
```

#### Paso 6: Aparecen en Catálogo
```
Los Pokémon ahora son visibles en:
- "Lista de Pokémon Disponibles"
- Otros usuarios pueden verlos y comprarlos
```

### Resultado
Los 3 Pokémon ahora están en venta. Carlos puede recibir ofertas.

---

## Caso 4: Negociación de Transacción

### Escenario
Una compra genera una transacción que el vendedor debe aprobar o rechazar.

### Parte 1: Desde la Perspectiva del Comprador (María)

#### Paso 1: Realizar Compra
```
María compra "Flareon" a Pedro por $100
Estado: ⏳ Pendiente de Aprobación
```

#### Paso 2: Ver Estado en Transacciones
```
María navega a "Mis Transacciones - Compras"

Transacción mostrada:
- Pokémon: Flareon
- Precio: $100
- Vendedor: Pedro
- Estado: ⏳ Pendiente
- Fecha: 15 abril 2026
```

#### Paso 3: Esperar
```
María puede:
- Esperar a que Pedro responda
- Ir a hacer otras compras
- Revisar sus compras pendientes más tarde
```

### Parte 2: Desde la Perspectiva del Vendedor (Pedro)

#### Paso 1: Recibir Notificación
```
Pedro recibe una notificación:
"María compró Flareon por $100 - Aprueban o Rechaza"
```

#### Paso 2: Ver Transacciones Pendientes
```
Pedro navega a "Mis Transacciones - Ventas"

Transacción mostrada:
- Pokémon: Flareon
- Precio: $100
- Comprador: María
- Estado: ⏳ Pendiente
- Botones: [Aprobar] [Rechazar]
```

#### Paso 3: Revisar Comprador
```
Pedro verifica:
- ¿María es un comprador confiable?
- ¿Ha completado transacciones antes?
- ¿Tiene buena reputación?
```

#### Paso 4: Aprobar Compra
```
Pedro hace clic en "Aprobar ✅"

Confirmación:
- Se actualiza el estado
- Los Pokémon cambian de propietario
- Se notifica a María
```

#### Resultado en Ambos Lados

**Para María:**
```
✅ Transacción Completada
- Flareon ahora es de tu propiedad
- Precio pagado: $100
- Vendedor: Pedro
```

**Para Pedro:**
```
✅ Venta Completada
- Flareon vendido a María
- Dinero recibido: $100
- Compradora: María
```

---

## Caso 5: Gestión de Múltiples Pokémon

### Escenario
Un coleccionista (Lucas) gestiona muchos Pokémon, ajusta precios y responde múltiples compras.

### Paso 1: Ver Cartera de Pokémon
```
Lucas navega a "Mis Pokémon"

Visualiza su colección:
- 15 Pokémon registrados
- 8 vendidos
- 7 en proceso de venta
- 10 disponibles (sin comprador aún)
```

### Paso 2: Ajustar Precios
```
Lucas decide reducir precios de Pokémon con bajo interés:

Antes:
- Pikachu: Nivel 25, $150 (sin comprador)

Después:
1. Hace clic en "Editar" para Pikachu
2. Cambia precio a $120
3. Haz clic "Guardar Cambios"
4. ✅ Precio actualizado
```

### Paso 3: Eliminar Pokémon
```
Lucas tiene un Pokémon duplicado que ya no quiere vender:

1. Navega a "Mis Pokémon"
2. Busca el Pokémon duplicado
3. Haz clic en "Eliminar" 🗑️
4. Confirma eliminación
5. ✅ Pokémon eliminado (solo si no hay compra pendiente)
```

### Paso 4: Gestionar Múltiples Transacciones
```
Lucas recibe 5 compras simultáneamente:

Transacciones Pendientes:
1. Blastoise - María - $180 ⏳
2. Charizard - Juan - $200 ⏳
3. Pikachu - Ana - $120 ⏳
4. Dragonite - Carlos - $300 ⏳
5. Venusaur - Pedro - $160 ⏳
```

#### Opción A: Aprobar Todas
```
Lucas realiza comprobaciones rápidas
Decide: Todos son compradores confiables
Acción: Haz clic "Aprobar" en cada uno

Resultado:
✅ 5 ventas completadas
💰 Dinero recibido: $860
```

#### Opción B: Algunos Rechazan
```
Lucas revisa cada una:

1. Blastoise - María ✅ Aprobar
2. Charizard - Juan ✅ Aprobar
3. Pikachu - Ana ❌ Rechazar (compradora sin reputación)
4. Dragonite - Carlos ✅ Aprobar
5. Venusaur - Pedro ✅ Aprobar

Resultado:
✅ 4 ventas completadas
💰 Dinero recibido: $740
❌ 1 venta rechazada
```

### Resultado Final
```
Dashboard de Lucas muestra:
- Pokémon activos: 6
- Ventas completadas este mes: 12
- Ingresos: $5,200
- Calificación: ⭐⭐⭐⭐⭐ (5 estrellas)
```

---

## 🎯 Resumen de Flujos Principales

### Flujo de Comprador
```
1. Registrarse → 2. Iniciar Sesión → 3. Explorar Pokémon 
→ 4. Seleccionar → 5. Comprar → 6. Esperar Aprobación
```

### Flujo de Vendedor
```
1. Registrarse → 2. Iniciar Sesión → 3. Registrar Pokémon
→ 4. Visualizar en Catálogo → 5. Recibir Compras
→ 6. Aprobar/Rechazar
```

### Flujo Completo de Transacción
```
Comprador compra → Sistema registra venta
→ Vendedor recibe notificación → Vendedor aprueba/rechaza
→ Sistema actualiza estado → Ambos reciben confirmación
```

---

## 💡 Consejos Prácticos

### Para Compradores
- ✅ Escoge Pokémon con fotos claras
- ✅ Lee las descripciones completas
- ✅ Compra de vendedores con buena reputación
- ✅ Ten paciencia mientras esperas aprobación

### Para Vendedores
- ✅ Sube fotos de excelente calidad
- ✅ Describe los Pokémon detalladamente
- ✅ Establece precios competitivos
- ✅ Responde rápidamente a las compras
- ✅ Construye tu reputación poco a poco

---

**¿Necesitas más ayuda? Consulta la Guía de Usuario completa.** 📚
