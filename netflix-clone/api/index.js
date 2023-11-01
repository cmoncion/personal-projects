import express from "express";
import morgan from "morgan";
import cors from "cors";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";

import dbCon from "./database/dbCon.js";
dbCon.sync();

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(morgan("dev"));
app.use( cors({ origin: "*", }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api", userRouter);

app.listen(app.get("port"), () => {
  console.log("Serving running on port:", app.get("port"));
});
