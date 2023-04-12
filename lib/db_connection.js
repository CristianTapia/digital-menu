import pg from "pg";
import { Sequelize, DataTypes, Model } from "sequelize";
import { config } from "dotenv";
config();

async function dbConnection() {
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

  // DB test connection
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  // async function createWaitersTable() {
  //   class waiters extends Model {}
  //   waiters.init(
  //     {
  //       name: { type: DataTypes.STRING },
  //       lastName: { type: DataTypes.STRING },
  //     },
  //     { sequelize, modelName: "waiters" }
  //   );

  //   // Crear tabla si no existe (no hacer nada si existe)
  //   await waiters.sync();
  // }

  // createWaitersTable();
}

export { dbConnection };
