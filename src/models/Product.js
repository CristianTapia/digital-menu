import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connection.js";

class Product extends Model {}

export const product = Product.init({
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    image: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING},
    category: { type: DataTypes.INTEGER }
  },
  { sequelize, modelName: "waiters",
    timestamps: false,
    createdAt: false, }
);