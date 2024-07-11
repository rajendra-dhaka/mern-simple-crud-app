import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { route } from "./routes/user.route.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", route);

export { app };
