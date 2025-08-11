/*
  Warnings:

  - You are about to drop the column `userType` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `company` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userTypeId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `company` DROP FOREIGN KEY `Company_identificationTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `company` DROP FOREIGN KEY `Company_userId_fkey`;


-- 1. Agregar los nuevos campos y userTypeId como NULL temporalmente
ALTER TABLE `user` 
  DROP COLUMN `userType`,
  ADD COLUMN `companyAddress` VARCHAR(191) NULL,
  ADD COLUMN `companyDocument` LONGTEXT NULL,
  ADD COLUMN `companyEmail` VARCHAR(191) NULL,
  ADD COLUMN `companyLogo` LONGTEXT NULL,
  ADD COLUMN `companyNIT` VARCHAR(191) NULL,
  ADD COLUMN `companyName` VARCHAR(191) NULL,
  ADD COLUMN `companyPhone` VARCHAR(191) NULL,
  ADD COLUMN `userTypeId` INTEGER NULL;

-- DropTable
DROP TABLE `company`;


CREATE TABLE `UserType` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(191) NOT NULL,
  UNIQUE INDEX `UserType_name_key`(`name`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2. Insertar los tipos de usuario
INSERT INTO `UserType` (`name`) VALUES ('normal'), ('empresa');

-- 3. Asignar 'normal' a todos los usuarios existentes
UPDATE `user` SET `userTypeId` = (SELECT id FROM `UserType` WHERE name = 'normal');

-- 4. Alterar la columna para que sea NOT NULL
ALTER TABLE `user` MODIFY COLUMN `userTypeId` INTEGER NOT NULL;

ALTER TABLE `User` ADD CONSTRAINT `User_userTypeId_fkey` FOREIGN KEY (`userTypeId`) REFERENCES `UserType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
