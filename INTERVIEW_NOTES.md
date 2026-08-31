# Interview Notes

## What This Project Shows

- A clean NestJS module structure.
- Code-first GraphQL API with queries and a mutation.
- Prisma schema targeting CockroachDB.
- Separate `Experience`, `Education` and `Certification` entities.
- Skill levels focused on practical usage depth: `FAMILIAR`, `PRACTICAL`, `PROFICIENT`.
- Docker Compose for local CockroachDB and S3-compatible MinIO.
- Seed data for repeatable demo setup.
- A small test around service behavior.

## Good Live Changes To Practice

- Add a mutation for creating a certification.
- Add pagination to `projects`.
- Add a mutation for creating a new project.
- Replace demo contacts with real resume data.
- Add signed upload URLs for MinIO/S3.

## Current Limitation

The S3 part currently exposes upload target metadata and Dockerized MinIO config. Real presigned upload URLs can be added with `@aws-sdk/s3-request-presigner` when package installation is stable.
