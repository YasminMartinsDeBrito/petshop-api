import { Express } from "express";
import userRouter from "./user.routes";
import petRouter from "./pet.routes";
import addressRouter from "./address.routes";
import vaccineRouter from "./vaccines.routes";
import historyRouter from "./history.routes";

const registerRouter = (app:Express): void => {
    app.use("/users", userRouter),
    app.use("/pets", petRouter),
    app.use("/address", addressRouter),
    app.use("/vaccine", vaccineRouter),
    app.use("/history", historyRouter)
}

export default registerRouter