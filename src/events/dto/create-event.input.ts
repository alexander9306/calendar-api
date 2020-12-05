import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateEventInput {
  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => Date)
  date: Date;
}
