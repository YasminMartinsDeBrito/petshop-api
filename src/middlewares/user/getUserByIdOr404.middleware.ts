import { userRepository } from "../../repositories";
import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../../errors";

const getUserByIdOr404 = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { userId } = req.params
    const user = await userRepository.findOne({userId})
    if(!user){
        throw new ErrorHandler(404, "User not found")
    }
    req.user = user
    return next()
}

export default getUserByIdOr404