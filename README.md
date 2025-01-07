
# Final Drilling Módulo 7

Este proyecto corresponde al trabajo final del Módulo 7 del Bootcamp de Desarrollo FullStack JavaScript de Talento Digital.

## Descripción

El objetivo de este proyecto es aplicar los conocimientos adquiridos en el módulo, desarrollando una aplicación que gestiona los cursos y Bootcamps de una determinada empresa de adiestramiento.

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/retrovertigo1981/finallDrillingModulo7.git
   ```
2. **Navega al directorio del proyecto:**
   ```bash
   cd finallDrillingModulo7
   ```
3. **Instala las dependencias:**
   ```bash
   npm install
   ```
4. **Configura las variables de entorno:**
   - Renombra el archivo `.env-example` a `.env`:
     ```bash
     mv .env-example .env
     ```
   - Edita el archivo `.env` para configurar las variables necesarias, como las credenciales de la base de datos.

5. **Realiza las migraciones de la base de datos:**
   ```bash
   npx sequelize db:migrate
   ```
6. **(Opcional) Carga datos de ejemplo:**
   ```bash
   npx sequelize db:seed:all
   ```

## Uso

Para iniciar la aplicación en modo de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.



## Tecnologías Utilizadas

- **Node.js** y **Express**: Para el servidor backend.
- **Sequelize**: ORM para la gestión de la base de datos.
- **Insomnia**: plataforma de desarrollo de API para diseñar, probar y depurar la API de manera eficiente.


## Licencia

Este proyecto se distribuye bajo la licencia ISC. 

## Autor

Desarrollado por Sebastián Peña Jorquera 
- Email <pjfanchile@gmail.com>



 