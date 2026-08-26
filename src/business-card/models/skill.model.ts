import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { SkillLevel } from './skill-level.enum';

@ObjectType()
export class Skill {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  category: string;

  @Field(() => SkillLevel)
  level: SkillLevel;

  @Field(() => Float, { nullable: true })
  years?: number | null;
}
