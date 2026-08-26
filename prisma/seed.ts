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
          { name: 'TypeScript', category: 'Language', level: SkillLevel.JUNIOR_PLUS, years: 1.5 },
          { name: 'Node.js', category: 'Runtime', level: SkillLevel.JUNIOR_PLUS, years: 1.5 },
          { name: 'NestJS', category: 'Backend', level: SkillLevel.JUNIOR_PLUS, years: 1 },
          { name: 'GraphQL', category: 'API', level: SkillLevel.JUNIOR, years: 0.5 },
          { name: 'Prisma', category: 'ORM', level: SkillLevel.JUNIOR_PLUS, years: 1 },
          { name: 'CockroachDB', category: 'Database', level: SkillLevel.JUNIOR, years: 0.3 },
          { name: 'Docker', category: 'DevOps', level: SkillLevel.JUNIOR_PLUS, years: 1 },
          { name: 'Git', category: 'Tooling', level: SkillLevel.JUNIOR_PLUS, years: 2 },
          { name: 'S3 storage', category: 'Cloud', level: SkillLevel.JUNIOR, years: 0.5 },
          { name: 'Claude Code', category: 'AI tooling', level: SkillLevel.JUNIOR, years: 0.3 }
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
            description:
              'Built API services, integrated databases, prepared Docker environments and practiced production-style backend workflows.',
            stack: ['TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker']
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
