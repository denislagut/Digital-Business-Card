import { registerEnumType } from '@nestjs/graphql';

export enum SkillLevel {
  FAMILIAR = 'FAMILIAR',
  PRACTICAL = 'PRACTICAL',
  PROFICIENT = 'PROFICIENT',
}

registerEnumType(SkillLevel, {
  name: 'SkillLevel',
});
