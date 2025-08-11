-- AlterTable
ALTER TABLE `user` ADD COLUMN `companyLegalStatus` VARCHAR(191) NULL,
    ADD COLUMN `companyLegalType` VARCHAR(191) NULL,
    ADD COLUMN `companyTradeName` VARCHAR(191) NULL;
