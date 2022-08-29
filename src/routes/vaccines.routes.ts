import { Router } from "express";
import { vaccineController } from "../controllers";
import {
  getVaccineByIdOr404,
  userPermission,
  validateSchema,
  tokens,
} from "../middlewares";
import { createVaccineSchema } from "../schemas";

const vaccineRouter = Router();

vaccineRouter.post(
  "/register",
  validateSchema(createVaccineSchema),
  tokens,
  vaccineController.createVaccine
);

vaccineRouter.get("/pet/:petId", tokens, vaccineController.getAll);

vaccineRouter.patch(
  "/:vaccineId",
  tokens,
  getVaccineByIdOr404,
  tokens,
  vaccineController.updateVaccine
);
vaccineRouter.delete(
  "/:vaccineId",
  tokens,
  getVaccineByIdOr404,
  userPermission,
  vaccineController.deletePet
);

export default vaccineRouter