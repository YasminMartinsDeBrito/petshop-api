import { Request, Response } from "express";
import addressService from "../services/address.service";

class AddressController {
    createAddress = async(req: Request, res: Response) => {
        const address= await addressService.createAddress(req, req.headers.authorization.split(" ")[1])
        return res.status(201).json(address)
    }
    getAddressById = async (req: Request, res: Response) => {
        const address = await addressService.getAddressById(req)
        return res.status(200).json(address)
    }
    getAll = async(req: Request, res: Response) => {
        const address = await addressService.getAll()
        return res.status(200).json({address})
    }
    updateAddress = async(req: Request, res: Response) => {
        const updateAddress = await addressService.updateAddress(req)
        return res.status(200).json(updateAddress)
    }
    deleteAddress = async(req: Request, res: Response) => {
        const { status, message } = await addressService.deleteAddress(req)
        return res.status(status).json(message)
    }
}
export default new AddressController()