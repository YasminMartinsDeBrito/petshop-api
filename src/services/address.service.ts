import { Request } from "express";
import { Address } from '../entities/Address'
import { addressRepository, userRepository } from "../repositories";
import  Jwt from "jsonwebtoken";
import { getAllAddressSchema, serializerCreateAddressSchema, serializerCreateUserSchema } from "../schemas";
import * as dotenv from "dotenv";
import { User } from "../entities/User";

dotenv.config();

interface IAddress {
  status: number;
  message: object;
}

class addressService {
  createAddress = async ({ validated }: Request, token) => {
    const userOne = serializerCreateUserSchema.validate(Jwt.decode(token))
    const user: User = await userRepository.findOne({
        userId: (await userOne).userId
    })

    const createAddress = await addressRepository.save({
        ...(validated as Address),
        user
    })
    return serializerCreateAddressSchema.validate(createAddress, { stripUnknown: true})
  };


  getAll = async (): Promise<Partial<Address>[]> => {
    const address = await addressRepository.all();
    return getAllAddressSchema.validate(address, {
      stripUnknown: true,
    });
  };



  getAddressById = async ({ address}: Request) => {
    const addressFind = await addressRepository.findOne({ addressId: address.addressId });

    return serializerCreateAddressSchema.validate(addressFind, {
      stripUnknown: true
    });
  };


  updateAddress = async ({ address, body }: Request) => {
    await addressRepository.update(address.addressId, { ...body });

    return serializerCreateAddressSchema.validate(
      { ...address, ...body },
      { stripUnknown: true }
    );
  };

  deleteAddress = async({ address }: Request): Promise<IAddress> => {
    await addressRepository.delete(address.addressId)

    return {
        status: 200,
        message: { message: "Address has been deleted"}
    }
  }
}
export default new addressService();
