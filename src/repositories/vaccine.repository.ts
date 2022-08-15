import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Vaccine } from "../entities/Vaccine";
interface IVaccineRepo {
  save: (vaccines: Partial<Vaccine>) => Promise<Vaccine>;
  all: () => Promise<Vaccine[]>;
  findOne: (payload: object) => Promise<Vaccine>;
  update: (id: string, payload: Partial<Vaccine>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class VaccineRepo implements IVaccineRepo {
  private ormRepo: Repository<Vaccine>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Vaccine);
  }

  save = async (vaccine: Partial<Vaccine>) => {
    return await this.ormRepo.save(vaccine);
  };
  all = async () => {
    return await this.ormRepo.find();
  };
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
  update = async (id: string, payload: Partial<Vaccine>) => {
    return await this.ormRepo.update(id, { ...payload });
  };
  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new VaccineRepo();
