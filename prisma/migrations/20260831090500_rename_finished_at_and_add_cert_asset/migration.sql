-- Rename date range fields to a shared domain term.
ALTER TABLE "Experience" RENAME COLUMN "finishedAt" TO "endedAt";
ALTER TABLE "Education" RENAME COLUMN "finishedAt" TO "endedAt";

-- Allow certification cards to point either to an external credential page or to an S3/public asset.
ALTER TABLE "Certification" ADD COLUMN "assetUrl" STRING;
