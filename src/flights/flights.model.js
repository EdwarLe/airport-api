import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Flight = sequelize.define("flight", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: "flight_id",
  },

  originId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "origin_id",
  },

  destinationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "destination_id",
  },

  planeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "plane_id",
  },

  departureTime: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "departure_time",
  },

  checkIn: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "check_in",
  },

  statusFlight: {
    type: DataTypes.ENUM(
      "pending",
      "in progress",
      "done",
      "cancelled",
      "delayed"
    ),
    allowNull: false,
    defaultValue: "pending",
    field: "status_flight",
  },

  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

export default Flight;
