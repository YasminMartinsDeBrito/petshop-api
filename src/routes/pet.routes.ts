import { Router } from "express";
import { petController } from "../controllers";
import {
  getPetByIdOr404,
  userPermission,
  validateSchema,
  tokens,
} from "../middlewares";
import { createPetSchema } from "../schemas";

const petRouter = Router();

petRouter.post(
  "/register",
  validateSchema(createPetSchema),
 tokens,
  petController.createPet
);

petRouter.get("", tokens, petController.getAll);
petRouter.get("/:petId", getPetByIdOr404,tokens, petController.getPetById);

petRouter.patch(
  "/:petId",
  tokens,
  getPetByIdOr404,
  tokens,
  petController.updatePet
);
petRouter.delete(
  "/:petId",
  tokens,
  getPetByIdOr404,
  userPermission,
  petController.deletePet
);

export default petRouter