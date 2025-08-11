/*
  Warnings:

  - You are about to drop the column `name` on the `company` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadoLegal` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identificationNumber` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identificationTypeId` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreComercial` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `razonSocial` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoSociedad` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `company` DROP COLUMN `name`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `estadoLegal` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `identificationDocument` LONGTEXT NULL,
    ADD COLUMN `identificationNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `identificationTypeId` INTEGER NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `nombreComercial` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `photo` LONGTEXT NULL,
    ADD COLUMN `razonSocial` VARCHAR(191) NOT NULL,
    ADD COLUMN `tipoSociedad` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `userType` VARCHAR(191) NOT NULL DEFAULT 'normal';

-- CreateIndex
CREATE UNIQUE INDEX `Company_userId_key` ON `Company`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `Company_email_key` ON `Company`(`email`);

-- AddForeignKey
ALTER TABLE `Company` ADD CONSTRAINT `Company_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Company` ADD CONSTRAINT `Company_identificationTypeId_fkey` FOREIGN KEY (`identificationTypeId`) REFERENCES `IdentificationType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
