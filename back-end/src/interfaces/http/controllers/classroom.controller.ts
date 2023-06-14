import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassroomService } from '../../../application/services/classroom.service';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Get()
  findAll() {
    return this.classroomService.findAll();
  }

  @Get('student/:id')
  findManyByStudentId(@Param('id') id_student: string) {
    return this.classroomService.findMany(id_student);
  }

  @Get(':id')
  findOneByClassroomId(@Param('id') id_classroom: string) {
    return this.classroomService.findOne(id_classroom);
  }

  @Get('plan/:id_classroom')
  findClassPlans(@Param('id_classroom') id_classroom: string) {
    return this.classroomService.findClassPlans(id_classroom);
  }

  @Get('classroom-news/:id_classroom')
  findClassroomNews(@Param('id_classroom') id_classroom: string) {
    return this.classroomService.findClassroomNews(id_classroom);
  }
}
