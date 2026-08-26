# Claude Code Context

This repository was prepared as an interview task for a TypeScript backend role.

## Project Goal

Build a compact digital business card API that presents a developer profile through a production-shaped backend stack:

- NestJS
- GraphQL
- Prisma
- CockroachDB
- Docker
- S3-compatible storage

## Development Rules

- Keep the API small and easy to explain during a live interview.
- Prefer explicit modules and services over hidden magic.
- Keep demo data in `prisma/seed.ts`.
- Keep GraphQL examples in `graphql-examples.http`.
- Do not commit `.env` or generated build output.

## Useful Commands

```bash
npm install
npm run docker:up
npm run db:generate
npm run db:migrate -- --name init
npm run db:seed
npm run start:dev
```
