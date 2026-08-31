import { PrismaClient, SkillLevel } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      fullName: 'Denis Lagutin',
      headline: 'Junior+ TypeScript Backend Developer',
      location: 'Russia / Remote',
      summary:
        'Backend developer focused on TypeScript, NestJS, GraphQL, Prisma, Docker and reliable API design. This API is a digital business card prepared for a backend interview task.',
      email: 'denis.lagutin@example.com',
      githubUrl: 'https://github.com/denislagut',
      resumeAsset: 's3://digital-card-assets/resume.pdf',
      skills: {
        create: [
          { name: 'TypeScript', category: 'Language', level: SkillLevel.PROFICIENT },
          { name: 'Node.js', category: 'Runtime', level: SkillLevel.PRACTICAL },
          { name: 'NestJS', category: 'Backend', level: SkillLevel.PRACTICAL },
          { name: 'ASP.NET Core', category: 'Backend', level: SkillLevel.PROFICIENT },
          { name: 'GraphQL', category: 'API', level: SkillLevel.PRACTICAL },
          { name: 'Prisma', category: 'ORM', level: SkillLevel.PRACTICAL },
          { name: 'PostgreSQL', category: 'Database', level: SkillLevel.PROFICIENT },
          { name: 'CockroachDB', category: 'Database', level: SkillLevel.FAMILIAR },
          { name: 'Docker', category: 'DevOps', level: SkillLevel.PRACTICAL },
          { name: 'Git', category: 'Tooling', level: SkillLevel.PROFICIENT },
          { name: 'S3 storage', category: 'Cloud', level: SkillLevel.FAMILIAR },
          { name: 'Claude Code', category: 'AI tooling', level: SkillLevel.PRACTICAL },
          { name: 'C++', category: 'Language', level: SkillLevel.FAMILIAR },
          { name: 'PHP', category: 'Language', level: SkillLevel.FAMILIAR }
        ]
      },
      projects: {
        create: [
          {
            title: 'Digital Business Card API',
            description:
              'NestJS GraphQL API that presents a developer profile, skills, experience and portfolio projects.',
            sourceUrl: 'https://github.com/denislagut/digital-business-card-api',
            highlights: [
              'Code-first GraphQL schema',
              'Prisma models for CockroachDB',
              'Docker Compose environment with CockroachDB and S3-compatible MinIO',
              'Seed script for repeatable demo data'
            ],
            stack: ['TypeScript', 'Node.js', 'NestJS', 'GraphQL', 'Prisma', 'CockroachDB', 'Docker', 'S3']
          }
        ]
      },
      experiences: {
        create: [
          {
            company: 'Pet projects and freelance practice',
            role: 'Backend Developer',
            startedAt: new Date('2024-01-01T00:00:00.000Z'),
            endedAt: null,
            description:
              'Built API services, integrated databases, prepared Docker environments and practiced production-style backend workflows.',
            stack: ['TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker']
          }
        ]
      },
      educations: {
        create: [
          {
            institution: 'BSTU / BGTU',
            degree: 'Higher education',
            field: 'Software engineering / Computer science',
            startedAt: new Date('2022-09-01T00:00:00.000Z'),
            endedAt: new Date('2026-06-30T00:00:00.000Z'),
            description:
              'Technical education foundation with software development, algorithms, databases and engineering practice.'
          }
        ]
      },
      certifications: {
        create: [
          {
            title: 'Backend development practice',
            issuer: 'Self-study and project work',
            issuedAt: new Date('2025-01-01T00:00:00.000Z'),
            assetUrl: 's3://digital-card-assets/certificates/backend-practice.pdf',
            description:
              'Practical backend portfolio work with typed APIs, database modeling, Docker environments and Git workflow.'
          }
        ]
      }
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
