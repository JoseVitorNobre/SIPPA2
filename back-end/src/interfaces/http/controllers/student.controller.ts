import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from '../../../application/services/student.service';
import { CreateStudentDto } from '../dtos/student/create-student.dto';
import { UpdateStudentDto } from '../dtos/student/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':enrollment')
  findOneByEnrollment(@Param('enrollment') enrollment: number) {
    return this.studentService.findOneByEnrollment(enrollment);
  }
}
