import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Education {
  @Field(() => ID)
  id: string;

  @Field()
  institution: string;

  @Field()
  degree: string;

  @Field()
  field: string;

  @Field(() => Date, { nullable: true })
  startedAt?: Date | null;

  @Field(() => Date, { nullable: true })
  endedAt?: Date | null;

  @Field(() => String, { nullable: true })
  description?: string | null;
}
