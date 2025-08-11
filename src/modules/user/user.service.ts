import { Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from './prisma/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly repo: UserRepository) {}

  async create(dto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const identificationTypeId = Number(dto.identificationTypeId);
    const userTypeId = Number(dto.userTypeId);
    try {
      return await this.repo.create({ ...dto, identificationTypeId, password: hashedPassword, userTypeId });
    } catch (error) {
      if (error.code === 'P2002' && error.meta?.target?.includes('username')) {
        throw new BadRequestException('El nombre de usuario ya existe. Debe ser diferente.');
      }
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        throw new BadRequestException('El correo electrónico ya está en uso.');
      }
      throw error;
    }
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  findByUsername(username: string) {
    return this.repo.findByUsername(username);
  }
}
