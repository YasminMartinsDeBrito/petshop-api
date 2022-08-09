//Historico

import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Pet } from "./Pet";
import { User } from "./User";

@Entity("history")
export class History {
  @PrimaryGeneratedColumn("uuid")
  historyId?: string;

  @Column({ nullable: false })
  returning: Date;

  @Column({ default: null })
  package: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Pet, (pet) => pet.history)
  pet: Pet;

  @OneToMany(() => User, (user) => user.history)
  user: User;
}
