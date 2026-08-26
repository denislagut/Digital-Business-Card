import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => ID)
  id: string;

  @Field()
  company: string;

  @Field()
  role: string;

  @Field()
  startedAt: Date;

  @Field({ nullable: true })
  finishedAt?: Date | null;

  @Field()
  description: string;

  @Field(() => [String])
  stack: string[];
}
