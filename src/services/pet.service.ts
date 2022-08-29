import { Request } from "express";
import { Pet } from '../entities/Pet'
import { petRepository, userRepository } from "../repositories";
import  Jwt from "jsonwebtoken";
import { getAllPetsSchema, serializerCreatePetSchema, serializerCreateUserSchema } from "../schemas";
import * as dotenv from "dotenv";
import { User } from "../entities/User";

dotenv.config();

interface IPet {
  status: number;
  message: object;
}

class petService {
  createPet = async ({ validated }: Request, token) => {
    const userOne = serializerCreateUserSchema.validate(Jwt.decode(token))
    const user: User = await userRepository.findOne({
        userId: (await userOne).userId
    })

    const createPet = await petRepository.save({
        ...(validated as Pet),
        user
    })
    return serializerCreatePetSchema.validate(createPet, { stripUnknown: true})
  };


  getAll = async (): Promise<Partial<Pet>[]> => {
    const pet = await petRepository.all();
    return getAllPetsSchema.validate(pet, {
      stripUnknown: true
    });
  };



  getPetById = async ({ pet }: Request) => {
    const petsFind = await petRepository.findOne({ petId:pet.petId });

    return serializerCreatePetSchema.validate(petsFind, {
      stripUnknown: true
    });
  };


  updatePet = async ({ pet, body }: Request) => {
    await petRepository.update(pet.petId, { ...body });

    return serializerCreatePetSchema.validate(
      { ...pet, ...body },
      { stripUnknown: true }
    );
  };

  deletePet = async({ pet }: Request): Promise<IPet> => {
    await petRepository.delete(pet.petId)

    return {
        status: 200,
        message: { message: "Pet has been deleted"}
    }
  }
}
export default new petService();
