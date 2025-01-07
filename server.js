const express = require('express');
const app = express();
const { UserRouter, BootcampRouter } = require('./routes/index.routes.js');

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/usuarios', UserRouter);
app.use('/bootcamps', BootcampRouter);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Aplicación escuchando en el puerto: ${PORT}`);
});
