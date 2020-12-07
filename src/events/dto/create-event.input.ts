import { InputType, Field, ID } from "@nestjs/graphql";

@InputType()
export class CreateEventInput {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => Date)
  start: Date;

  @Field(() => Date)
  end: Date;
}
