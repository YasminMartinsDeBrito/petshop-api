import app from "./app";
import { AppDataSource } from "./data-source";
import * as dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected!");
    const port = process.env.PORT ?? 3000;

    app.listen(port, () => {
      console.log(`App runnning on http:localhost:${port}/`);
    });
  })
  .catch((error) => console.log(error));
