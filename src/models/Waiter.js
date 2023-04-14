import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connection.js";

class Waiter extends Model {}

export const waiter = Waiter.init({
    name: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
  },
  { sequelize, modelName: "waiter",
    timestamps: false,
    createdAt: false, }
);