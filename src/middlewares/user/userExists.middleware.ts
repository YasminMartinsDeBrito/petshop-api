import { userRepository } from "../../repositories";
import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../../errors";
import { User } from "../../entities/User";

const userExists = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const EmailUser: User = await userRepository.findOne({
        email: req.body.email
    })
    const CpfUser: User = await userRepository.findOne({
        cpf: req.body.cpf
    })
    if(EmailUser){
        throw new ErrorHandler(409, "Email already exists")
    }
    if(CpfUser){
        throw new ErrorHandler(409, "CPF already exists")
    }
    return next()
}

export default userExists