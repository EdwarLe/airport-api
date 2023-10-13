import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Plane = sequelize.define("planes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: "id_plane",
  },

  planeNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "plane_number",
  },

  model: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

  maxCapacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "max_capacity",
  },

  airline: {
    type: DataTypes.ENUM(
      "AeroGlobe",
      "AeroTronix",
      "VelocityAir",
      "AirQuest",
      "StartLink"
    ),
    allowNull: false,
  },

  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

export default Plane;
