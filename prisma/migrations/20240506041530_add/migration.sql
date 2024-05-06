/*
  Warnings:

  - You are about to drop the column `email` on the `Administrator` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Administrator` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Administrator` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Administrator` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Administrator` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Student` table. All the data in the column will be lost.
  - Added the required column `joinedAt` to the `Administrator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastLogin` to the `Administrator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bio` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `joinedAt` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `officeHours` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `officeLocation` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enrolledAt` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gpa` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `graduatedAt` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `major` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'STUDENT', 'TEACHER', 'USER');

-- DropIndex
DROP INDEX "Administrator_email_key";

-- DropIndex
DROP INDEX "Administrator_username_key";

-- DropIndex
DROP INDEX "Instructor_email_key";

-- DropIndex
DROP INDEX "Instructor_username_key";

-- DropIndex
DROP INDEX "Student_email_key";

-- DropIndex
DROP INDEX "Student_username_key";

-- AlterTable
ALTER TABLE "Administrator" DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "joinedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "lastLogin" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Instructor" DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "joinedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "officeHours" TEXT NOT NULL,
ADD COLUMN     "officeLocation" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "enrolledAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "gpa" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "graduatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "major" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
