import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connection.js";

class Product extends Model {}

export const product = Product.init({
    name: { type: DataTypes.TEXT },
    price: { type: DataTypes.INTEGER },
    image: { type: DataTypes.TEXT },
    procedence: { type: DataTypes.TEXT },
    description: { type: DataTypes.TEXT},
    category: { type: DataTypes.TEXT }
  },
  { sequelize, modelName: "products",
    timestamps: false,
    createdAt: false, }
);

// Foreign Key
// Product.hasOne(Category, {
//     foreignKey: 'categoryId'
//   });
//   Category.belongsTo(Product);
  