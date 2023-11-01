import { DataTypes } from "sequelize";
import dbCon from "../database/dbCon.js";

const User = dbCon.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  public_id: { type: DataTypes.STRING(100) },
  name: { type: DataTypes.STRING(100) },
  email: { type: DataTypes.STRING(100) },
  username: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING(255) },
  pin: { type: DataTypes.INTEGER },
});

export default User;
