import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { SecondCallService } from '../../../application/services/second-call.service';
import { CreateSecondCallDto } from '../dtos/second-call/create-second-call.dto';

@Controller('second-call')
export class SecondCallController {
  constructor(private readonly secondCallService: SecondCallService) {}

  @Get()
  findAll() {
    return this.secondCallService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secondCallService.findOne(id);
  }

  @Get('/:clasroom_id/:student_id')
  findExamns(@Param('clasroom_id') classroom_id: string, @Param('student_id') student_id: string) {
    return this.secondCallService.findExamNames(classroom_id, student_id);
  }

  @Get('exams/:clasroom_id/:student_id')
  findSecondCallsByClassroomStudent(@Param('clasroom_id') classroom_id: string, @Param('student_id') student_id: string) {
    return this.secondCallService.findByClasroomStudent(classroom_id, student_id);
  }

  @Post()
  create(@Body() createSecondCallDto: CreateSecondCallDto) {
    return this.secondCallService.create(createSecondCallDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string){
    return this.secondCallService.delete(id);
  }
}
