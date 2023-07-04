import { Controller, Get, Param } from '@nestjs/common';
import { ClassPlanService } from '../../../application/services/class-plan.service';

@Controller('class-plan')
export class ClassPlanController {
  constructor(private classPlanService: ClassPlanService) {}

  @Get()
  findAll() {
    return this.classPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.classPlanService.findOne(id);
  }
}
