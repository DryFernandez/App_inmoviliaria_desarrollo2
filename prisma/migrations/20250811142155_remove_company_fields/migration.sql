/*
  Warnings:

  - You are about to drop the column `companyAddress` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `companyDocument` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `companyEmail` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `companyLogo` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `companyNIT` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `companyPhone` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `companyAddress`,
    DROP COLUMN `companyDocument`,
    DROP COLUMN `companyEmail`,
    DROP COLUMN `companyLogo`,
    DROP COLUMN `companyNIT`,
    DROP COLUMN `companyPhone`;
