import { Router } from "express";
import { addressController } from "../controllers";
import {
  userPermission,
  validateSchema,
  tokens,
  getAddressByIdOr404,
} from "../middlewares";
import { createAddressSchema } from "../schemas";

const addressRouter = Router();

addressRouter.post(
  "/register",
  validateSchema(createAddressSchema),
  tokens,
  addressController.createAddress
);


addressRouter.get("", addressController.getAll);
addressRouter.get("/:addressId", getAddressByIdOr404, addressController.getAddressById);

addressRouter.patch(
  "/:addressId",
  tokens,
  getAddressByIdOr404,
  addressController.updateAddress
);
addressRouter.delete(
  "/:addressId",
  tokens,
  getAddressByIdOr404,
  addressController.deleteAddress
);

export default addressRouter