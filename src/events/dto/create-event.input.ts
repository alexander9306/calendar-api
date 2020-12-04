import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateEventInput {
  @Field()
  name: string;

  @Field()
  description?: string;

  @Field(() => Date)
  date: Date;
}
