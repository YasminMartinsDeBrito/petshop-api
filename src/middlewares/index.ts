import getAddressByIdOr404 from "./address/getAddress.middleware";
import getHistoryByIdOr404 from "./history/getHistoryByIdOr404.middleware";
import getPetByIdOr404 from "./pet/getPetByIdOr404.middleware";
import getScheduleByIdOr404 from "./schedule/getSchedule.middleware";
import getUserByIdOr404 from "./user/getUserByIdOr404.middleware";
import getVaccineByIdOr404 from "./vaccines/getVaccinesByIdOr404.middleware";
import validateSchema from "./user/validateSchemas.middleware";
import verifyAdmin from "./user/verifyAdmin.middleware";
import tokens from "./user/validateToken.middleware";
import userPermission from "./user/userPermission.middleware";
import userExists from "./user/userExists.middleware";

export {
  getAddressByIdOr404,
  getHistoryByIdOr404,
  getPetByIdOr404,
  getScheduleByIdOr404,
  getUserByIdOr404,
  getVaccineByIdOr404,
  tokens,
  userExists,
  userPermission,
  validateSchema,
  verifyAdmin,
};
