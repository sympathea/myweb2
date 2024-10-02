/*
  Warnings:

  - Added the required column `userFirstname` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userImg` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "userFirstname" TEXT NOT NULL,
ADD COLUMN     "userImg" TEXT NOT NULL;
