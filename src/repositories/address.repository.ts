import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address } from "../entities/Address";
interface IAddressRepo {
  save: (address: Partial<Address>) => Promise<Address>;
  all: () => Promise<Address[]>;
  findOne: (payload: object) => Promise<Address>;
  update: (id: string, payload: Partial<Address>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class AddressRepo implements IAddressRepo {
  private ormRepo: Repository<Address>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Address);
  }

  save = async (address: Partial<Address>) => {
    return await this.ormRepo.save(address);
  };
  all = async () => {
    return await this.ormRepo.find();
  };
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
  update = async (id: string, payload: Partial<Address>) => {
    return await this.ormRepo.update(id, { ...payload });
  };
  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new AddressRepo();
