// Load modules
const express = require('express');
const hbs = require('hbs');

// Create express server
const app = express();
const port = 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

// Render pages
app.get('/', (req, res) => {
    res.render('inicio-sesion');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/vista-planta', (req, res) => {
    res.render('floorplan');
});

app.get('/agregar-producto', (req, res) => {
    res.render('add-product');
});

app.get('/editar-producto', (req, res) => {
    res.render('edit-product');
});

app.get('/eliminar-producto', (req, res) => {
    res.render('del-product');
});

app.get('/asignar-mesa', (req, res) => {
    res.render('asign-table');
});

app.get('/config-mesas', (req, res) => {
    res.render('settings');
});

app.listen(port, () => {
    console.log('Servicio levantado');
});