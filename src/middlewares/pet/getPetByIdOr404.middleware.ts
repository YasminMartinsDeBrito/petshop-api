import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../../errors";
import { petRepository } from "../../repositories";

const getPetByIdOr404 = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { petId } = req.params
    const pet = await petRepository.findOne({petId})

    if(!pet){
        throw new ErrorHandler(404, "Pet not found")
    }
    req.pet = pet
    return next()
}
export default getPetByIdOr404