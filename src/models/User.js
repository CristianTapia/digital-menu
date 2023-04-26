import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connection.js";

class User extends Model {}

export const user = User.init({
    name: { type: DataTypes.TEXT },
    email: { type: DataTypes.TEXT },
    password: { type: DataTypes.TEXT },
  },
  { sequelize, modelName: "users",
    timestamps: false,
    createdAt: false, }
);