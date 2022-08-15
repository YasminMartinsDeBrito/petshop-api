//Historico

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column({default:null})
  returning?: Date;

  @Column({ default: null })
  package?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Pet, (pet) => pet.history, {eager:true})
  @JoinColumn()
  pet: Pet;

  @ManyToOne(() => User, (user) => user.history, {eager: true})
  @JoinColumn()
  user: User;
}
