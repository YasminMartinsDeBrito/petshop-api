import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { History } from "../entities/History";

interface IHistoryRepo {
  save: (historys: Partial<History>) => Promise<History>;
  all: () => Promise<History[]>;
  findOne: (payload: object) => Promise<History>;
  update: (id: string, payload: Partial<History>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class HistoryRepo implements IHistoryRepo {
  private ormRepo: Repository<History>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(History);
  }

  save = async (history: Partial<History>) => {
    return await this.ormRepo.save(history);
  };
  all = async () => {
    return await this.ormRepo.find();
  };
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
  update = async (id: string, payload: Partial<History>) => {
    return await this.ormRepo.update(id, { ...payload });
  };
  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new HistoryRepo();
