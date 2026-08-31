# Digital Business Card API

Backend project for the TypeScript developer interview task.

## Stack

- TypeScript
- Node.js
- NestJS
- GraphQL
- Prisma
- CockroachDB
- Docker
- S3-compatible storage with MinIO
- Git
- Claude Code assisted development

## Run Locally

```bash
npm install
copy .env.example .env
npm run docker:up
npm run db:generate
npm run db:migrate -- --name init
npm run db:seed
npm run start:dev
```

If package installation hangs behind VPN, try:

```bash
npm cache verify
npm install --no-audit --no-fund --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000
```

If `registry.npmjs.org` keeps timing out, use a mirror for one install:

```bash
npm install --no-audit --no-fund --registry=https://registry.npmmirror.com
```

If Windows leaves a partial `node_modules` after `EPERM`, close editors/terminals that may hold files, then remove `node_modules` and run `npm install` again.

GraphQL playground: http://localhost:3000/graphql

CockroachDB console: http://localhost:8080

MinIO console: http://localhost:9001

## Demo Query

```graphql
query Profile {
  profile {
    fullName
    headline
    location
    summary
    githubUrl
    skills {
      name
      category
      level
      years
    }
    projects {
      title
      description
      stack
      highlights
    }
    experiences {
      company
      role
      startedAt
      finishedAt
      description
      stack
    }
    educations {
      institution
      degree
      field
      startedAt
      finishedAt
      description
    }
    certifications {
      title
      issuer
      issuedAt
      credentialUrl
      description
    }
  }
}
```

## Live Interview Mutation

```graphql
mutation UpdateProfile {
  updateProfile(
    input: {
      headline: "Junior+ TypeScript Backend Developer"
      location: "Remote"
    }
  ) {
    fullName
    headline
    location
  }
}
```

## S3-Compatible Storage Query

```graphql
query ResumeUploadTarget {
  resumeUploadTarget(fileName: "resume.pdf") {
    bucket
    key
    endpoint
    publicUrl
  }
}
```

## Notes

The project is intentionally small but production-shaped: code-first GraphQL schema, Prisma data model, Dockerized dependencies, validation pipe and clear seed data. Work experience, education and certifications are separate domain entities, so the business card does not mix university or credentials with employment history. The public profile values can be edited during the live screen-sharing part of the interview.
