import { Injectable } from '@nestjs/common';
import { IdentificationTypeRepository } from './prisma/identification-type.repository';
import { CreateIdentificationTypeDto } from './dto/create-identification-type.dto';

@Injectable()
export class IdentificationTypeService {
  constructor(private readonly repo: IdentificationTypeRepository) {}

  create(dto: CreateIdentificationTypeDto) {
    return this.repo.create(dto);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }
}
