import { ObjectType, Field, ID } from "@nestjs/graphql";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Event {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column({
    length: 50,
  })
  @Field()
  name: string;

  @Column({
    length: 255,
  })
  @Field(() => String, { nullable: true })
  description?: string;

  @Column()
  @Field(() => Date)
  date: Date;

  @CreateDateColumn({ name: "created_at" })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  @Field(() => Date)
  updatedAt: Date;
}
