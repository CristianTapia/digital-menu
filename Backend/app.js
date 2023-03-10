// Load modules
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

// Create express server
const app = express();

// Config server to use hbs engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/agregar-producto', (req, res) => {
    res.render('add-product')
});

app.get('/editar-producto', (req, res) => {
    res.render('edit-product')
});

app.listen('3000', () => {
    console.log('Servicio levantado')
});