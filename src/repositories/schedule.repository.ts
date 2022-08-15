import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Schedule } from "../entities/Schedule";
interface IScheduleRepo {
  save: (schedules: Partial<Schedule>) => Promise<Schedule>;
  all: () => Promise<Schedule[]>;
  findOne: (payload: object) => Promise<Schedule>;
  update: (id: string, payload: Partial<Schedule>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class ScheduleRepo implements IScheduleRepo {
  private ormRepo: Repository<Schedule>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Schedule);
  }

  save = async (schedule: Partial<Schedule>) => {
    return await this.ormRepo.save(schedule);
  };
  all = async () => {
    return await this.ormRepo.find();
  };
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
  update = async (id: string, payload: Partial<Schedule>) => {
    return await this.ormRepo.update(id, { ...payload });
  };
  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new ScheduleRepo();
