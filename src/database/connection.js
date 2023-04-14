// import pg from "pg";
import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

// DB connection
const sequelize = new Sequelize(
  "postgres",
  "postgres",
  process.env.SUPABASE_PASS,
  {
    host: "db.uvmpjuvzexqsshwiyvjd.supabase.co",
    dialect: "postgres",
  }
);

export { sequelize };