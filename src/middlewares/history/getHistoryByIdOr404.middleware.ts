import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../../errors";
import { historyRepository } from "../../repositories";

const getHistoryByIdOr404 = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { historyId } = req.params
    const history = await historyRepository.findOne({historyId})

    if(!history){
        throw new ErrorHandler(404, "history not found")
    }
    req.history = history
    return next()
}
export default getHistoryByIdOr404