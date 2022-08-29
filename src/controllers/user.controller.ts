import { Request, Response } from "express";
import userService from "../services/user.service";

class UserController {
    loginUser = async (req: Request, res: Response) => {
        const { status, message } = await userService.loginUser(req)
        return res.status(status).json(message)
    }
    createUser = async(req: Request, res: Response) => {
        const user = await userService.createUser(req)
        return res.status(201).json(user)
    }
    getUserById = async (req: Request, res: Response) => {
        const user = await userService.getUserById(req)
        return res.status(200).json(user)
    }
    getAll = async(req: Request, res: Response) => {
        const users = await userService.getAll()
        return res.status(200).json({users})
    }
    updateUser = async(req: Request, res: Response) => {
        const updateUser = await userService.updateUser(req)
        return res.status(200).json(updateUser)
    }
    deleteUser = async(req: Request, res: Response) => {
        const { status, message } = await userService.deleteUser(req)
        return res.status(status).json(message)
    }
}

export default new UserController()