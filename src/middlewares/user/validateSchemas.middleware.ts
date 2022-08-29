import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../../errors";
import { AnySchema } from "yup";

const validateSchema = (shape:AnySchema) => async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try{
        const validated = await shape.validate(req.body,{
            abortEarly: false,
            stripUnknown: true
        })
        req.validated = validated
        return next()
    }catch(error){
        throw new ErrorHandler(400, {message:error.errors})
    }
}

export default validateSchema