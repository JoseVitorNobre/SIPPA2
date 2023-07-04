import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassroomStudentService } from '../../../application/services/classroom-student.service';

@Controller('classroom-student')
export class ClassroomStudentController {
  constructor(private readonly classroomStudentService: ClassroomStudentService) {}
  
  @Get()
  findAll() {
    return this.classroomStudentService.findAll();
  }

  // @Get(':studentId')
  // findOne(@Param('studentId') studentId: string) {
  //   return this.classroomStudentService.findByStudentId(studentId);
  // }
}
