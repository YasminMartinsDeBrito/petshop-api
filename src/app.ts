
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { errorHandler } from "./errors";
import registerRouter from "./routes";
// import cors from "cors";

const app = express();

// app.use(
//     cors({
//         origin: "*",
//     })
// );

app.use(express.json());
registerRouter(app);

app.use((err: Error, _: Request, res: Response, __: NextFunction) =>
    errorHandler(err, res)
);

export default app;