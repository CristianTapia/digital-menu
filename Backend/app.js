// Load modules
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
// import bodyParser from 'body-parser';
// const hbs = require('hbs');
// const fs = require('fs');


// Create express server
const app = express();
const port = 3000;

app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'index'
}));

app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static('public'));

// Render pages
app.get('/', (req, res) => {
    res.render('inicio-sesion');
});

// app.get('/index', (req, res) => {
//     res.render('index');
// });

// app.get('/vista-planta', (req, res) => {
//     res.render('floorplan');
// });

// app.get('/agregar-producto', (req, res) => {
//     res.render('add-product');
// });

// app.get('/editar-producto', (req, res) => {
//     res.render('edit-product');
// });

// app.get('/eliminar-producto', (req, res) => {
//     res.render('del-product');
// });

// app.get('/asignar-mesa', (req, res) => {
//     res.render('asign-table');
// });

// app.get('/config-mesas', (req, res) => {
//     res.render('settings');
// });

app.listen(port, () => {
    console.log('Servicio levantado');
});