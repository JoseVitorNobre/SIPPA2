import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentActivityService } from '../../../application/services/student-activity.service';

@Controller('student-activity')
export class StudentActivityController {
  constructor(private readonly studentActivityService: StudentActivityService) {}

  @Get()
  findAll() {
    return this.studentActivityService.findAll();
  }

  @Get('student/:student_id/:classroom_id')
  findStudentActivities(@Param('student_id') student_id: string, @Param('classroom_id') classroom_id: string) {
    return this.studentActivityService.findStudentActivities(student_id, classroom_id);
  }
}
