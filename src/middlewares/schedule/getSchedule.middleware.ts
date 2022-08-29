import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../../errors";
import { scheduleRepository } from "../../repositories";

const getScheduleByIdOr404 = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { scheduleId } = req.params
    const schedule = await scheduleRepository.findOne({scheduleId})

    if(!schedule){
        throw new ErrorHandler(404, "Schedule not found")
    }
    req.schedule = schedule
    return next()
}
export default getScheduleByIdOr404