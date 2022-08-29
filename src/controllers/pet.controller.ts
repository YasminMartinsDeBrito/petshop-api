import { Request, Response } from "express";
import petService from '../services/pet.service'

class PetController {
    createPet = async(req: Request, res: Response) => {
        const pet = await petService.createPet(req, req.headers.authorization.split(" ")[1])
        return res.status(201).json(pet)
    }
    getPetById = async (req: Request, res: Response) => {
        const pet = await petService.getPetById(req)
        return res.status(200).json(pet)
    }
    getAll = async(req: Request, res: Response) => {
        const pets = await petService.getAll()
        return res.status(200).json({pets})
    }
    updatePet = async(req: Request, res: Response) => {
        const updatePet = await petService.updatePet(req)
        return res.status(200).json(updatePet)
    }
    deletePet = async(req: Request, res: Response) => {
        const { status, message } = await petService.deletePet(req)
        return res.status(status).json(message)
    }
}
export default new PetController()