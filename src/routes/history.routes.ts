import { Router } from "express";
import { historyController } from "../controllers";
import {
  getHistoryByIdOr404,
  userPermission,
  validateSchema,
  tokens,
} from "../middlewares";
import { createHistorySchema } from "../schemas";

const historyRouter = Router();

historyRouter.post(
  "/register",
  validateSchema(createHistorySchema),
  tokens,
  historyController.createHistory
);


historyRouter.get("/pet/:petId",tokens, getHistoryByIdOr404, historyController.getHistoryByPet);

historyRouter.patch(
  "/:historyId",
  tokens,
  getHistoryByIdOr404,
  historyController.updateHistory
);
historyRouter.delete(
  "/:historyId",
  tokens,
  getHistoryByIdOr404,
  userPermission,
  historyController.deleteHistory
);

export default historyRouter