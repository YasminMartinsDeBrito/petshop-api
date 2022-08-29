import { Request, Response } from "express";
import vaccineService from "../services/vaccine.service";

class VaccineController {
    createVaccine = async(req: Request, res: Response) => {
        const vaccine = await vaccineService.createVaccine(req, req.headers.authorization.split(" ")[1])
        return res.status(201).json(vaccine)
    }
  
    getAll = async(req: Request, res: Response) => {
        const vaccines = await vaccineService.getAll(req)
        return res.status(200).json({vaccines})
    }
    updateVaccine = async(req: Request, res: Response) => {
        const updateVaccine = await vaccineService.updateVaccine(req, req.params, req.headers.authorization.split(" ")[1])
        return res.status(200).json(updateVaccine)
    }
    deletePet = async(req: Request, res: Response) => {
        const { status, message } = await vaccineService.deleteVaccine(req)
        return res.status(status).json(message)
    }
}
export default new VaccineController()