import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connection.js";

class Category extends Model {}

export const category = Category.init({
    name: { type: DataTypes.TEXT },
  },
  { sequelize, modelName: "categories",
    timestamps: false,
    createdAt: false, }
);