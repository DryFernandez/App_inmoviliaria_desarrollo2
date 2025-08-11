import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateIdentificationTypeDto } from '../dto/create-identification-type.dto';

@Injectable()
export class IdentificationTypeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateIdentificationTypeDto) {
    return this.prisma.identificationType.create({ data: dto });
  }

  async findAll() {
    return this.prisma.identificationType.findMany();
  }

  async findOne(id: number) {
    return this.prisma.identificationType.findUnique({ where: { id } });
  }
}
