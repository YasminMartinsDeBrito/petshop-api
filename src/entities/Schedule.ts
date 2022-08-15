//  Agenda

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

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("uuid")
  scheduleId?: string;

  @Column({ default: null })
  returning?: Date;

  @Column({ nullable: false })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Pet, (pet) => pet.schedule, {eager:true})
  pet: Pet;
}
