// Load modules
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import hbs from 'hbs';

// Sequelize and DB
import { sequelize } from './src/database/connection.js';
import { waitersRoutes } from './src/routes/waiters.routes.js';

async function main() {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
    app.listen(port, () => {
      console.log("Server listening");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();

// Create express server
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(waitersRoutes);

app.set('view engine', 'hbs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('Directory name 👉️', __dirname);

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

/*----------------------------------------------------
-                   RENDERING PAGES                  -
----------------------------------------------------*/

/* -------- Front Office --------*/
app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/carta', (req, res) => {
    res.render('menu');
});


/* -------- Back Office --------*/

app.get('/', (req, res) => {
    res.render('inicio-sesion');
});

app.get('/vista-bloques', (req, res) => {
    res.render('block-view');
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

export { app };