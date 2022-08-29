import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../../errors";
import { vaccineRepository } from "../../repositories";

const getVaccineByIdOr404 = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { vaccineId } = req.params
    const vaccine = await vaccineRepository.findOne({vaccineId})

    if(!vaccine){
        throw new ErrorHandler(404, "vaccine not found")
    }
    req.vaccine = vaccine
    return next()
}
export default getVaccineByIdOr404