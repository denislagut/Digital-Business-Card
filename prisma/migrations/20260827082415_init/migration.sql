-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('BEGINNER', 'JUNIOR', 'JUNIOR_PLUS', 'MIDDLE');

-- CreateTable
CREATE TABLE "Profile" (
    "id" STRING NOT NULL,
    "fullName" STRING NOT NULL,
    "headline" STRING NOT NULL,
    "location" STRING NOT NULL,
    "summary" STRING NOT NULL,
    "email" STRING NOT NULL,
    "phone" STRING,
    "githubUrl" STRING,
    "telegramUrl" STRING,
    "resumeAsset" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "category" STRING NOT NULL,
    "level" "SkillLevel" NOT NULL,
    "years" FLOAT8,
    "profileId" STRING NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "url" STRING,
    "sourceUrl" STRING,
    "highlights" STRING[],
    "stack" STRING[],
    "profileId" STRING NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" STRING NOT NULL,
    "company" STRING NOT NULL,
    "role" STRING NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3),
    "description" STRING NOT NULL,
    "stack" STRING[],
    "profileId" STRING NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Skill_profileId_name_key" ON "Skill"("profileId", "name");

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
