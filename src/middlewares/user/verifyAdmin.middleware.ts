import { NextFunction, Request, Response } from "express";
import { User } from "../../entities/User";
import { ErrorHandler } from "../../errors";
import { userRepository } from "../../repositories";

const verifyAdmin = async (req:Request, res: Response, next: NextFunction) => {
    const decodedUser = await userRepository.findOne({
        userId : (req.decoded as User).userId
    })
    const paramsUser = req.user

    if(decodedUser.isAdm){
        return next()
    }
    if(decodedUser?.userId != paramsUser.userId){
        throw new ErrorHandler(403, "You can't acess information of another user")
    }
    return next()
}
export default verifyAdmin