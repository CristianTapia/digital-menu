import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connection.js";

class Product extends Model {}

export const product = Product.init({
    name: { type: DataTypes.TEXT },
    price: { type: DataTypes.INTEGER },
    image: { type: DataTypes.TEXT },
    procedence: { type: DataTypes.TEXT },
    description: { type: DataTypes.TEXT },
    categoryId: { type: DataTypes.INTEGER }
  },
  { sequelize, modelName: "products",
    timestamps: false,
    createdAt: false, }
);