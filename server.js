const express = require('express');
const app = express();
const cookieParser = require("cookie-parser")
const { UserRouter, BootcampRouter, SessionRouter } = require('./routes/index.routes.js');
const { errorHandler } = require("./middlewares")

const PORT = process.env.PORT || 3000;

app.use(cookieParser())
app.use(express.json());

// Rutas
app.use('/api/usuarios', UserRouter);
app.use('/api/bootcamps', BootcampRouter);
app.use('/api/', SessionRouter);

app.use(errorHandler);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Aplicación escuchando en el puerto: ${PORT}`);
});
