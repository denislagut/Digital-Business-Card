import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Experience } from './experience.model';
import { Project } from './project.model';
import { Skill } from './skill.model';

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: string;

  @Field()
  fullName: string;

  @Field()
  headline: string;

  @Field()
  location: string;

  @Field()
  summary: string;

  @Field()
  email: string;

  @Field(() => String, { nullable: true })
  phone?: string | null;

  @Field(() => String, { nullable: true })
  githubUrl?: string | null;

  @Field(() => String, { nullable: true })
  telegramUrl?: string | null;

  @Field(() => String, { nullable: true })
  resumeAsset?: string | null;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Project])
  projects: Project[];

  @Field(() => [Experience])
  experiences: Experience[];
}
