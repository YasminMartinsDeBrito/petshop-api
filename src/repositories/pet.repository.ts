import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Pet } from "../entities/Pet";

interface IPetRepo {
  save: (pets: Partial<Pet>) => Promise<Pet>;
  all: () => Promise<Pet[]>;
  findOne: (payload: object) => Promise<Pet>;
  update: (id: string, payload: Partial<Pet>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class PetRepo implements IPetRepo {
  private ormRepo: Repository<Pet>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Pet);
  }

  save = async (pet: Partial<Pet>) => {
    return await this.ormRepo.save(pet);
  };
  all = async () => {
    return await this.ormRepo.find();
  };
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
  update = async (id: string, payload: Partial<Pet>) => {
    return await this.ormRepo.update(id, { ...payload });
  };
  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new PetRepo();
