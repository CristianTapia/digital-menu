import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connection.js";

class Order extends Model {}

export const order = Order.init({
    image: { type: DataTypes.TEXT },
    name: { type: DataTypes.TEXT },
    price: { type: DataTypes.INTEGER },
    quantity: { type: DataTypes.INTEGER }
  },
  { sequelize, modelName: "orders",
    timestamps: false,
    createdAt: false, }
);