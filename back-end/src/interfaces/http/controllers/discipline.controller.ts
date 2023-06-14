import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisciplineService } from '../../../application/services/discipline.service';

@Controller('discipline')
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) {}

  @Get()
  findAll() {
    return this.disciplineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disciplineService.findOne(id);
  }
}
