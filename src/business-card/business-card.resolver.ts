import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './models/profile.model';
import { Skill } from './models/skill.model';
import { BusinessCardService } from './business-card.service';

@Resolver(() => Profile)
export class BusinessCardResolver {
  constructor(private readonly businessCardService: BusinessCardService) {}

  @Query(() => Profile, {
    description: 'Returns the full digital business card with skills, projects and experience.',
  })
  profile() {
    return this.businessCardService.getProfile();
  }

  @Query(() => [Skill], {
    description: 'Returns profile skills. Optional category filter matches a skill category.',
  })
  skills(@Args('category', { nullable: true }) category?: string) {
    return this.businessCardService.getSkills(category);
  }

  @Mutation(() => Profile, {
    description: 'Updates public profile fields during the live interview exercise.',
  })
  updateProfile(@Args('input') input: UpdateProfileInput) {
    return this.businessCardService.updateProfile(input);
  }
}
