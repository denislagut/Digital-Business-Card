import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  url?: string | null;

  @Field({ nullable: true })
  sourceUrl?: string | null;

  @Field(() => [String])
  highlights: string[];

  @Field(() => [String])
  stack: string[];
}
