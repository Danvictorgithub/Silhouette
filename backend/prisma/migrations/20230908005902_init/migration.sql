/*
  Warnings:

  - Added the required column `content` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motto` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "content" VARCHAR(255) NOT NULL,
ADD COLUMN     "motto" VARCHAR(255) NOT NULL,
ADD COLUMN     "title" VARCHAR(255) NOT NULL;
