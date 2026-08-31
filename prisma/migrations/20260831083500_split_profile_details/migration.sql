-- CreateEnum
CREATE TYPE "SkillLevel_new" AS ENUM ('FAMILIAR', 'PRACTICAL', 'PROFICIENT');

-- Map the old self-assessment enum to the new practical-usage enum.
ALTER TABLE "Skill" ALTER COLUMN "level" TYPE STRING;
UPDATE "Skill"
SET "level" = CASE "level"
    WHEN 'BEGINNER' THEN 'FAMILIAR'
    WHEN 'JUNIOR' THEN 'PRACTICAL'
    WHEN 'JUNIOR_PLUS' THEN 'PRACTICAL'
    WHEN 'MIDDLE' THEN 'PROFICIENT'
    ELSE 'FAMILIAR'
END;
DROP TYPE "SkillLevel";
ALTER TYPE "SkillLevel_new" RENAME TO "SkillLevel";
ALTER TABLE "Skill" ALTER COLUMN "level" TYPE "SkillLevel" USING "level"::"SkillLevel";

-- CreateTable
CREATE TABLE "Education" (
    "id" STRING NOT NULL,
    "institution" STRING NOT NULL,
    "degree" STRING NOT NULL,
    "field" STRING NOT NULL,
    "startedAt" TIMESTAMP(3),
    "finishedAt" TIMESTAMP(3),
    "description" STRING,
    "profileId" STRING NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certification" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "issuer" STRING NOT NULL,
    "issuedAt" TIMESTAMP(3),
    "credentialUrl" STRING,
    "description" STRING,
    "profileId" STRING NOT NULL,

    CONSTRAINT "Certification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certification" ADD CONSTRAINT "Certification_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
