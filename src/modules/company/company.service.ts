import { Injectable } from '@nestjs/common';
import { CompanyRepository } from './prisma/company.repository';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepo: CompanyRepository) {}

  create(data: CreateCompanyDto) {
    return this.companyRepo.create(data);
  }

  findAll() {
    return this.companyRepo.findAll();
  }

  findOne(id: number) {
    return this.companyRepo.findById(id);
  }
}