import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connection.js";
import { product } from "./Product.js";

class Category extends Model {}

export const category = Category.init(
  {
    name: { type: DataTypes.TEXT },
  },
  { sequelize, modelName: "categories", timestamps: false, createdAt: false }
);

category.hasMany(product, {
  foreignKey: "categoryId",
  sourceKey: "id",
});

product.belongsTo(category, {
  foreignKey: "categoryId",
  targetKey: "id",
});
