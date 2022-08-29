import { Request, Response } from "express";
import historyService from "../services/history.service";

class HistoryController {
  createHistory = async (req: Request, res: Response) => {
    const history = await historyService.createHistory(
      req,
      req.headers.authorization.split(" ")[1]
    );
    return res.status(history.status).json({ message: history.message });
  };
  getHistoryByPet = async (req: Request, res: Response) => {
    const history = await historyService.getHistoryByPet(req.params);
    return res.status(history.status).json(history.messsage);
  };
  updateHistory = async (req: Request, res: Response) => {
    const updateHistory = await historyService.updateHistory(
      req,
      req.params
    );
    return res.status(200).json(updateHistory);
  };

  deleteHistory = async (req: Request, res: Response) => {
    const { status, message } = await historyService.deleteHistory(
      req,
      req.params
    );
  };
}
export default new HistoryController();
