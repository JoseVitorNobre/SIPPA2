import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentActivityFileService } from '../../../application/services/student-activity-file.service';

@Controller('student-activity-file')
export class StudentActivityFileController {
  constructor(private readonly studentActivityFileService: StudentActivityFileService) {}

  @Get()
  findAll() {
    return this.studentActivityFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentActivityFileService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentActivityFileService.remove(+id);
  }
}
