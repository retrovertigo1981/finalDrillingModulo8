
# Final Drilling Módulo 8

Este proyecto es el trabajo final del Módulo 8 del Bootcamp de Desarrollo FullStack JavaScript de Talento Digital. La aplicación gestiona cursos y bootcamps para una empresa de adiestramiento.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
  - [Configuración (`config/`)](#configuración-config)
  - [Middlewares (`middlewares/`)](#middlewares-middlewares)
  - [Migraciones (`migrations/`)](#migraciones-migrations)
  - [Controladores (`controllers/`)](#controladores-controllers)
  - [Rutas (`routes/`)](#rutas-routes)
- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/retrovertigo1981/finalDrillingModulo8.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd finalDrillingModulo8
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura las variables de entorno:

   - Renombra el archivo `.env-example` a `.env`:

     ```bash
     mv .env-example .env
     ```

   - Edita el archivo `.env` para configurar las variables necesarias, como las credenciales de la base de datos.

5. Ejecuta las migraciones para configurar la base de datos:

   ```bash
   npx sequelize-cli db:migrate
   ```

6. (Opcional) Si deseas cargar datos de ejemplo, ejecuta los seeders:

   ```bash
   npx sequelize-cli db:seed:all
   ```

## Configuración

El archivo de configuración principal se encuentra en `config/config.js`. Aquí se definen las configuraciones para diferentes entornos (desarrollo, prueba, producción), incluyendo las credenciales de la base de datos y otras opciones relevantes.

## Estructura del Proyecto

A continuación, se detalla la estructura principal del proyecto y la función de cada directorio:

### Configuración (`config/`)

- **`config.js`**: Contiene las configuraciones de la base de datos para distintos entornos. Utiliza variables de entorno para definir parámetros como el nombre de la base de datos, el usuario, la contraseña y el host.

### Middlewares (`middlewares/`)

Este directorio alberga funciones middleware personalizadas que se utilizan en las rutas para manejar tareas específicas, como la autenticación de usuarios, validaciones y manejo de errores.

- **`authMiddleware.js`**: Verifica si el usuario está autenticado antes de permitir el acceso a ciertas rutas protegidas.

- **`errorHandler.js`**: Maneja los errores que ocurren en las rutas y envía respuestas adecuadas al cliente.

### Migraciones (`migrations/`)

Las migraciones gestionan los cambios en la estructura de la base de datos a lo largo del tiempo, permitiendo versionar y compartir el esquema de la base de datos.

- **`[timestamp]-create-users.js`**: Define la estructura de la tabla `Users`, incluyendo columnas como `id`, `name`, `email`, `password`, entre otras.

- **`[timestamp]-create-bootcamps.js`**: Establece la estructura de la tabla `Bootcamps`, con columnas como `id`, `title`, `description`, `duration`, etc.

- **`[timestamp]-create-user-bootcamps.js`**: Crea la tabla intermedia para la relación muchos a muchos entre `Users` y `Bootcamps`, permitiendo asignar múltiples usuarios a múltiples bootcamps.

### Controladores (`controllers/`)

Los controladores contienen la lógica de negocio y manejan las solicitudes y respuestas para las rutas definidas.

- **`userController.js`**: Maneja operaciones relacionadas con los usuarios, como registro, inicio de sesión, actualización de perfiles y eliminación de cuentas.

- **`bootcampController.js`**: Gestiona las operaciones relacionadas con los bootcamps, incluyendo la creación, actualización, obtención de detalles y eliminación de bootcamps.

### Rutas (`routes/`)

Este directorio define los endpoints de la API y asigna las solicitudes HTTP a los controladores correspondientes.

- **`userRoutes.js`**: Define las rutas para las operaciones de usuario, como `/register`, `/login`, `/profile`, etc.

- **`bootcampRoutes.js`**: Establece las rutas para las operaciones de bootcamp, como `/bootcamps`, `/bootcamps/:id`, `/bootcamps/:id/enroll`, entre otras.

## Uso

Para iniciar la aplicación en un entorno de desarrollo, ejecuta:

```bash
npm run dev
```

Esto iniciará el servidor en el puerto definido en las variables de entorno (por defecto, el puerto 3000).

Puedes acceder a la aplicación en `http://localhost:3000`.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. 