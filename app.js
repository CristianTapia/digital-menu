// Load modules
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import hbs from 'hbs';

// Sequelize and DB
import { sequelize } from './src/database/connection.js';
import { waitersRoutes } from './src/routes/waiters.routes.js';
import { categoriesRoutes } from './src/routes/categories.routes.js';
import { productsRoutes } from './src/routes/products.routes.js';
import { tablesRoutes } from './src/routes/tables.routes.js';

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
app.use(express.static('public'));
app.use(waitersRoutes);
app.use(categoriesRoutes);
app.use(productsRoutes);
app.use(tablesRoutes);

app.set('view engine', 'hbs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('Directory name 👉️', __dirname);

hbs.registerPartials(__dirname + '/views/partials');

/*----------------------------------------------------
-                   RENDERING PAGES                  -
----------------------------------------------------*/

/* -------- Front Office -------- */

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/carta', (req, res) => {
    res.render('menu');
});


/* -------- Back Office -------- */

app.get('/', (req, res) => {
    res.render('inicio-sesion');
});

app.get('/vista-bloques', (req, res) => {
    res.render('block-view');
});

app.get('/vista-planta', (req, res) => {
    res.render('floorplan');
});

app.get('/agregar-producto', async (req, res) => {
    const result = await fetch("http://localhost:3000/categories");
    const data = await result.json();
    res.render('add-product', { categories: data });
});

app.get('/editar-producto', async (req, res) => {
    const result = await fetch("http://localhost:3000/categories");
    const data = await result.json();
    res.render('edit-product', { categories: data });
});

app.get('/eliminar-producto', async (req, res) => {
    const result = await fetch("http://localhost:3000/categories");
    const data = await result.json();
    res.render('del-product', { categories: data });
});

app.get('/asignar-mesa', (req, res) => {
    res.render('asign-table');
});

app.get('/configuraciones', (req, res) => {
    res.render('settings');
});

app.get('/configuraciones/meseros', (req, res) => {
    res.render('settings-waiters');
});

app.get('/configuraciones/categorias', (req, res) => {
    res.render('settings-categories');
});

app.get('/configuraciones/mesas', (req, res) => {
    res.render('settings-tables');
});