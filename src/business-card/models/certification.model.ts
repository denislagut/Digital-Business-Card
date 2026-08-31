import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Certification {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  issuer: string;

  @Field(() => Date, { nullable: true })
  issuedAt?: Date | null;

  @Field(() => String, { nullable: true })
  credentialUrl?: string | null;

  @Field(() => String, { nullable: true })
  description?: string | null;
}
