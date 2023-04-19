import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connection.js";

class Table extends Model {}

export const table = Table.init({
    number: { type: DataTypes.INTEGER }
  },
  { sequelize, modelName: "tables",
    timestamps: false,
    createdAt: false, }
);