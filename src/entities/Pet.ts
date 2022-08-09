import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { History } from "./History";
import { Schedule } from "./Schedule";
import { User } from "./User";
import { Vaccine } from "./Vaccine";

@Entity("pets")
export class Pet {
  @PrimaryGeneratedColumn("uuid")
  petId?: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  birthdate: string;

  @Column({ nullable: false })
  sex: string;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false })
  size: string;

  @Column({ default: null })
  image?: Blob;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => User, (user) => user.pet)
  user: User;

  @OneToMany(() => Vaccine, (vaccine) => vaccine.pet)
  vaccine: Vaccine;

  @OneToMany(() => Schedule, (schedule) => schedule.pet)
  schedule: Schedule;

  @OneToMany(() => History, (history) => history.pet)
  history: History;
}
