import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
      return this.prisma.user.create({ data: { ...dto, userType: undefined } });
  }

  async findAll() {
      return this.prisma.user.findMany({
        include: {
          userType: true,
          identificationType: true,
        },
      });
  }

  async findOne(id: number) {
  return this.prisma.user.findUnique({ where: { id }, include: { userType: true, identificationType: true } });
  }

  async findByUsername(username: string) {
  return this.prisma.user.findUnique({ where: { username }, include: { userType: true, identificationType: true } });
  }
}
