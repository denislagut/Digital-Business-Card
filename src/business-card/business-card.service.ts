import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileInput } from './dto/update-profile.input';

const profileInclude = {
  skills: { orderBy: [{ category: 'asc' }, { name: 'asc' }] },
  projects: { orderBy: { title: 'asc' } },
  experiences: { orderBy: { startedAt: 'desc' } },
} satisfies Prisma.ProfileInclude;

@Injectable()
export class BusinessCardService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile() {
    const profile = await this.prisma.profile.findFirst({
      include: profileInclude,
      orderBy: { createdAt: 'asc' },
    });

    if (!profile) {
      throw new NotFoundException('Profile is not seeded yet. Run npm run db:seed.');
    }

    return profile;
  }

  async getSkills(category?: string) {
    const profile = await this.getProfile();

    return this.prisma.skill.findMany({
      where: {
        profileId: profile.id,
        ...(category ? { category } : {}),
      },
      orderBy: [{ category: 'asc' }, { name: 'asc' }],
    });
  }

  async updateProfile(input: UpdateProfileInput) {
    const profile = await this.getProfile();

    return this.prisma.profile.update({
      where: { id: profile.id },
      data: input,
      include: profileInclude,
    });
  }
}
