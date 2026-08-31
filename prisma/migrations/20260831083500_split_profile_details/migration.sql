-- CreateEnum
CREATE TYPE "SkillUsageLevel" AS ENUM ('FAMILIAR', 'PRACTICAL', 'PROFICIENT');

-- Map the old self-assessment enum to the new practical-usage enum.
ALTER TABLE "Skill" ADD COLUMN "level_new" "SkillUsageLevel";
UPDATE "Skill"
SET "level_new" = CASE "level"::STRING
    WHEN 'BEGINNER' THEN 'FAMILIAR'::"SkillUsageLevel"
    WHEN 'JUNIOR' THEN 'PRACTICAL'::"SkillUsageLevel"
    WHEN 'JUNIOR_PLUS' THEN 'PRACTICAL'::"SkillUsageLevel"
    WHEN 'MIDDLE' THEN 'PROFICIENT'::"SkillUsageLevel"
    ELSE 'FAMILIAR'::"SkillUsageLevel"
END;
ALTER TABLE "Skill" ALTER COLUMN "level_new" SET NOT NULL;
ALTER TABLE "Skill" DROP COLUMN "level";
ALTER TABLE "Skill" RENAME COLUMN "level_new" TO "level";

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
