

const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const adminRouter = require('./routes/r_admin');

app.use(morgan('dev'));

// Middleware para manejar cuerpos de solicitud JSON
app.use(express.json());

// Configurar la vista a usar (en este caso EJS)
app.set('view engine', 'ejs');

// Configurar la carpeta donde estarán las vistas (opcional, por defecto es 'views')
app.set('views', path.join(__dirname, 'views'));

//// Configurar la carpeta donde estarán las Js Dinamicos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para procesar datos de formularios
app.use(express.urlencoded({ extended: true }));

// rutas
app.use('/', adminRouter);

// app.get("/", (req, res) => {
//     res.send("¡Hola Mundo desde un servidor con Express!");
//   });
  

//iniciar el servidor
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor listo en puerto 3000')
});


