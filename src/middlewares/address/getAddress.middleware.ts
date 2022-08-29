import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../../errors";
import { addressRepository } from "../../repositories";

const getAddressByIdOr404 = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { addressId } = req.params
    const address = await addressRepository.findOne({addressId})

    if(!address){
        throw new ErrorHandler(404, "Address not found")
    }
    req.address = address
    return next()
}
export default getAddressByIdOr404