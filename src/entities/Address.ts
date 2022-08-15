import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import { User } from "./User";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  addressId?: string;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  district: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  number: number;

  @Column({ nullable: false })
  zipcode: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.address, { nullable: true, eager:true })
  @JoinColumn()
  user: User;
}
