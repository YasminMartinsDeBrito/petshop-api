import { Request } from "express";
import { petRepository, userRepository, historyRepository } from "../repositories";
import  Jwt from "jsonwebtoken";
import { serializerCreateHistorySchema, serializerCreateUserSchema } from "../schemas";
import * as dotenv from "dotenv";
import { History } from '../entities/History'
import { User } from "../entities/User";
import { Pet } from "../entities/Pet";

dotenv.config();

interface IHistory {
  status: number;
  message: object | string;
}

class historyService {
  createHistory = async ({ validated, body }: Request, token) => {
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
            message: {message: "You can't history this pet"}
        }
    }

    const history:History = await historyRepository.save({
        ...(validated as History),
        pet,
        user
    })
    return {
        status:201,
        message: await serializerCreateHistorySchema.validate(history, { stripUnknown: true})}
  };

//   Mostrar Historico de todos os hsitory


  getHistoryByPet = async (params) => {
    const history = await historyRepository.all();
    const results = history.filter((item) => {
        return item.pet.petId === params.petId
    })

    return serializerCreateHistorySchema.validate(results, {
      stripUnknown: true
    });
  };


  updateHistory = async ({body }: Request, params) => {
    const pet: Pet = await petRepository.findOne({
        petId: body.petId
    });

    const history: History = await historyRepository.findOne({
        historyId: params.petId
    })
    if(pet.petId != history.pet.petId){
        return{
            status: 400,
            message: "You're not allowed to access this route"
        }
    }
    await historyRepository.update(params.historyId, body)

    return {
        status: 200,
        message: body
    }
  };

  deleteHistory = async({ body }: Request, params)=> {

    const pet: Pet = await petRepository.findOne({
        petId: body.petId
    });

    const history: History = await historyRepository.findOne({
        historyId: params.petId
    })
    if(pet.petId != history.pet.petId){
        return{
            status: 400,
            message: "You're not allowed to access this route"
        }
    }
    await historyRepository.delete(params.historyId)

    return {
        status: 200,
        message:{message: "History has been deleted"}
    }
  }
}
export default new historyService();
