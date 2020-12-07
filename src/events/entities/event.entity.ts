import { ObjectType, Field, ID } from "@nestjs/graphql";
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Event {
  @PrimaryColumn()
  @Field(() => ID)
  id: string;

  @Column({
    length: 50,
  })
  @Field()
  name: string;

  @Column({
    length: 255,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  description?: string | null;

  @Column()
  @Field(() => Date)
  start: Date;

  @Column()
  @Field(() => Date)
  end: Date;

  @CreateDateColumn({ name: "created_at" })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  @Field(() => Date)
  updatedAt: Date;
}
