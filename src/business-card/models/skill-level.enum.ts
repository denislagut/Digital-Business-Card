import { registerEnumType } from '@nestjs/graphql';

export enum SkillLevel {
  BEGINNER = 'BEGINNER',
  JUNIOR = 'JUNIOR',
  JUNIOR_PLUS = 'JUNIOR_PLUS',
  MIDDLE = 'MIDDLE',
}

registerEnumType(SkillLevel, {
  name: 'SkillLevel',
});
