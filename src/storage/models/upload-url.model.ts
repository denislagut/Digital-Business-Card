import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UploadUrl {
  @Field()
  bucket: string;

  @Field()
  key: string;

  @Field()
  endpoint: string;

  @Field()
  publicUrl: string;
}
