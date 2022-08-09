// Usuario

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";
import { compare } from "bcrypt";
import { Address } from "./Address";
import { Pet } from "./Pet";
import { History } from "./History";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  userId?: string;

  @Column({ default: false })
  isAdm?: boolean;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, unique: true, length: 11 })
  cpf: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Address, (address) => address.user, { lazy: true })
  address: Address;

  @OneToMany(() => Pet, (pet) => pet.user)
  pet: Pet;

  @OneToMany(() => History, (history) => history.user)
  history: History;

  comparePwd = async (pwdString: string): Promise<boolean> => {
    return await compare(pwdString, this.password);
  };
}
