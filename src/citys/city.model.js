import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const City = sequelize.define(
  "city",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      field: "city_id",
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    country: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    lat: {
      type: DataTypes.FLOAT(),
      allowNull: false,
    },

    lon: {
      type: DataTypes.FLOAT(),
      allowNull: false,
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["name", "country"],
      },
    ],
  }
);

export default City
