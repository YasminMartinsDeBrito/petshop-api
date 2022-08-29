import { Request } from "express";
import { petRepository, userRepository, scheduleRepository } from "../repositories";
import  Jwt from "jsonwebtoken";
import { getAllScheduleSchema, serializerCreateScheduleSchema, serializerCreateUserSchema } from "../schemas";
import * as dotenv from "dotenv";
import { Schedule } from '../entities/Schedule'
import { User } from "../entities/User";
import { Pet } from "../entities/Pet";

dotenv.config();

interface ISchedule {
  status: number;
  message: object | string;
}

class scheduleService {
  createSchedule = async ({ validated, body }: Request, token) => {
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
            message: {message: "You can't schedule this pet"}
        }
    }

    const schedule: Schedule = await scheduleRepository.save({
        ...(validated as Schedule),
        pet
    })
    return {
        status:201,
        message: await serializerCreateScheduleSchema.validate(schedule, { stripUnknown: true})}
  };


  getAll = async ({pet}: Request) => {
    const schedule = await scheduleRepository.all();
    const results = schedule.filter((item) => {
        return item.pet.petId === pet.petId
    })

    return serializerCreateScheduleSchema.validate(results, {
      stripUnknown: true
    });
  };


  updateSchedule = async ({body }: Request, params, token) => {
    const pet: Pet = await petRepository.findOne({
        petId: body.petId
    });

    const schedule: Schedule = await scheduleRepository.findOne({
        scheduleId: params.petId
    })
    if(pet.petId != schedule.pet.petId){
        return{
            status: 400,
            message: "You're not allowed to access this route"
        }
    }
    await scheduleRepository.update(params.scheduleId, body)

    return {
        status: 200,
        message: await scheduleRepository.update(params.scheduleId, body)
    }
  };

  deleteSchedule = async({ schedule }: Request): Promise<ISchedule> => {
    await scheduleRepository.delete(schedule.scheduleId)

    return {
        status: 200,
        message: { message: "Schedule has been deleted"}
    }
  }
}
export default new scheduleService();
