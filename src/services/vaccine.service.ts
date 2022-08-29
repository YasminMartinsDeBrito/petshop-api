import { Request } from "express";
import { Vaccine } from '../entities/Vaccine'
import { petRepository, userRepository, vaccineRepository } from "../repositories";
import  Jwt from "jsonwebtoken";
import { getAllVaccinesSchema, serializerCreateVaccineSchema, serializerCreateUserSchema } from "../schemas";
import * as dotenv from "dotenv";
import { User } from "../entities/User";
import { Pet } from "../entities/Pet";

dotenv.config();

interface IVaccine {
  status: number;
  message: object | string;
}

class vaccineService {
  createVaccine = async ({ validated, body }: Request, token) => {
    const userOne = serializerCreateUserSchema.validate(Jwt.decode(token))
    const user: User = await userRepository.findOne({
        userId: (await userOne).userId
    })
    if(!user){
        return{
            status: 404,
            message: {message: "User not found"}
        }
    }
    
    const pet: Pet = await petRepository.findOne({
        petId: body.petId
    })

    if(!pet){
        return{
            status: 404,
            message: {message: "Pet not found"}
        }
    }
    if(pet.user.userId === user.userId){
        return{
            status: 400,
            message: {message: "You can't vaccine this pet"}
        }
    }

    const vaccine: Vaccine = await vaccineRepository.save({
        ...(validated as Vaccine),
        pet
    })
    return {
        status:201,
        message: await serializerCreateVaccineSchema.validate(vaccine, { stripUnknown: true})}
  };

    //mostrar so uma vacina

  getAll = async ({pet}: Request) => {
    const vaccine = await vaccineRepository.all();
    const results = vaccine.filter((item) => {
        return item.pet.petId === pet.petId
    })

    return serializerCreateVaccineSchema.validate(results, {
      stripUnknown: true
    });
  };


  updateVaccine = async ({body }: Request, params, token) => {
    const pet: Pet = await petRepository.findOne({
        petId: body.petId
    });

    const vaccine: Vaccine = await vaccineRepository.findOne({
        vaccineId: params.petId
    })
    if(pet.petId != vaccine.pet.petId){
        return{
            status: 400,
            message: "You're not allowed to access this route"
        }
    }
    await vaccineRepository.update(params.vaccineId, body)

    return {
        status: 200,
        message: await vaccineRepository.update(params.vaccineId, body)
    }
  };

  deleteVaccine = async({ vaccine }: Request): Promise<IVaccine> => {
    await vaccineRepository.delete(vaccine.vaccineId)

    return {
        status: 200,
        message: { message: "Vaccine has been deleted"}
    }
  }
}
export default new vaccineService();
