import { DataTypes } from "sequelize";
import db from "../database/db.js";

const User = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  public_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: { type: DataTypes.STRING(100) },
  email: { type: DataTypes.STRING(100) },
  password: { type: DataTypes.STRING(150) },
});

export default User;
