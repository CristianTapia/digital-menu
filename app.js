// Load modules
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import hbs from "hbs";
import cookieParser from "cookie-parser";

// Sequelize and DB
import { sequelize } from "./src/database/connection.js";
import { waitersRoutes } from "./src/routes/waiters.routes.js";
import { categoriesRoutes } from "./src/routes/categories.routes.js";
import { productsRoutes } from "./src/routes/products.routes.js";
import { tablesRoutes } from "./src/routes/tables.routes.js";
import { usersRoutes } from "./src/routes/users.routes.js";

// Sync data to DB
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

/*********************************************
*                Middleware                  *
*********************************************/

// Define public folder for static files
app.use(express.static("public"));
// Process data sent by forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// API
app.use(waitersRoutes);
app.use(categoriesRoutes);
app.use(productsRoutes);
app.use(tablesRoutes);
app.use(usersRoutes);

app.set("view engine", "hbs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("Directory name 👉️", __dirname);

hbs.registerPartials(__dirname + "/views/partials");

/*----------------------------------------------------
-                   RENDERING PAGES                  -
----------------------------------------------------*/

/* -------- Front Office -------- */

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/carta", async (req, res) => {
  const resultCategories = await fetch("http://localhost:3000/categories");
  const resultProducts = await fetch("http://localhost:3000/products");
  const dataCategories = await resultCategories.json();
  const dataProducts = await resultProducts.json();
  res.render("menu", { categories: dataCategories, products: dataProducts });
});

/* -------- Back Office -------- */

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/vista-bloques", async (req, res) => {
  const result = await fetch("http://localhost:3000/tables");
  const data = await result.json();
  res.render("block-view", { tables: data });
});

app.get("/vista-planta", (req, res) => {
  res.render("floorplan");
});

app.get("/agregar-producto", async (req, res) => {
  const result = await fetch("http://localhost:3000/categories");
  const data = await result.json();
  res.render("add-product", { categories: data });
});

app.get("/editar-producto", async (req, res) => {
  const result = await fetch("http://localhost:3000/categories");
  const data = await result.json();
  res.render("edit-product", { categories: data });
});

app.get("/eliminar-producto", async (req, res) => {
  const result = await fetch("http://localhost:3000/categories");
  const data = await result.json();
  res.render("del-product", { categories: data });
});

app.get("/asignar-mesa", (req, res) => {
  res.render("asign-table");
});

app.get("/configuraciones", (req, res) => {
  res.render("settings");
});

app.get("/configuraciones/meseros", async (req, res) => {
  res.render("settings-waiters");
});

app.get("/configuraciones/categorias", (req, res) => {
  res.render("settings-categories");
});

app.get("/configuraciones/mesas", async (req, res) => {
  const resultWaiters = await fetch("http://localhost:3000/waiters");
  const dataWaiters = await resultWaiters.json();
  res.render("settings-tables", { waiters: dataWaiters });
});