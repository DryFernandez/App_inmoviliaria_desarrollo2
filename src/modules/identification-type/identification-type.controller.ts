import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { IdentificationTypeService } from './identification-type.service';
import { CreateIdentificationTypeDto } from './dto/create-identification-type.dto';

@Controller('identification-type')
export class IdentificationTypeController {
  constructor(private readonly service: IdentificationTypeService) {}

  @Post()
  create(@Body() dto: CreateIdentificationTypeDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }
}
