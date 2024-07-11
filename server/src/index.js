import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();
const port = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.error("ERROR:", err);
      throw err;
    });
    app.listen(port, () => console.log(`listening on port: ${port}`));
  })
  .catch((err) => {
    console.error("App instance is not working!!", err);
  });
