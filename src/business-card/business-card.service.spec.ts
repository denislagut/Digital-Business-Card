import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { BusinessCardService } from './business-card.service';

describe('BusinessCardService', () => {
  const prisma = {
    profile: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    skill: {
      findMany: jest.fn(),
    },
  };

  let service: BusinessCardService;

  beforeEach(async () => {
    jest.clearAllMocks();

    const moduleRef = await Test.createTestingModule({
      providers: [
        BusinessCardService,
        {
          provide: PrismaService,
          useValue: prisma,
        },
      ],
    }).compile();

    service = moduleRef.get(BusinessCardService);
  });

  it('throws a clear error when profile has not been seeded', async () => {
    prisma.profile.findFirst.mockResolvedValue(null);

    await expect(service.getProfile()).rejects.toBeInstanceOf(NotFoundException);
  });

  it('filters skills by category for the seeded profile', async () => {
    prisma.profile.findFirst.mockResolvedValue({ id: 'profile-id' });
    prisma.skill.findMany.mockResolvedValue([]);

    await service.getSkills('Backend');

    expect(prisma.skill.findMany).toHaveBeenCalledWith({
      where: {
        profileId: 'profile-id',
        category: 'Backend',
      },
      orderBy: [{ category: 'asc' }, { name: 'asc' }],
    });
  });
});
