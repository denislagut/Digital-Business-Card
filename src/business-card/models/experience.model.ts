import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => ID)
  id: string;

  @Field()
  company: string;

  @Field()
  role: string;

  @Field(() => Date)
  startedAt: Date;

  @Field(() => Date, { nullable: true })
  endedAt?: Date | null;

  @Field()
  description: string;

  @Field(() => [String])
  stack: string[];
}
