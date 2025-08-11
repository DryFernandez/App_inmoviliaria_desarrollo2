import { Module } from '@nestjs/common';
import { IdentificationTypeService } from './identification-type.service';
import { IdentificationTypeController } from './identification-type.controller';
import { IdentificationTypeRepository } from './prisma/identification-type.repository';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IdentificationTypeController],
  providers: [IdentificationTypeService, IdentificationTypeRepository],
  exports: [IdentificationTypeService]
})
export class IdentificationTypeModule {}
