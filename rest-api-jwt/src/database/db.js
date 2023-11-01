import Sequelize from "sequelize";

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./db_rest_api.sqlite",
  define: {
    timestamps: false,
  },
});

try {
  db.authenticate();
  console.log("Connection has been established.");
} catch (error) {
  console.error("Unable to connect to the DB.");
}
export default db;
