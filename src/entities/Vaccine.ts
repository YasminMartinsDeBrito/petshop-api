import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Pet } from "./Pet";

@Entity("vaccines")
export class Vaccine {
  @PrimaryGeneratedColumn("uuid")
  vaccineId?: string;

  @Column({ nullable: false })
  name: string;

  @Column({ default: null })
  fabricante?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Pet, (pet) => pet.vaccine)
  pet: Pet;
}
