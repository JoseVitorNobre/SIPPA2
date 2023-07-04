import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpStatus, HttpCode, BadRequestException } from '@nestjs/common';
import { StudentActivityService } from '../../../application/services/student-activity.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

@Controller('student-activity')
export class StudentActivityController {
  constructor(private readonly studentActivityService: StudentActivityService) {}

  @Get()
  findAll() {
    return this.studentActivityService.findAll();
  }

  @Get('student/:id')
  findStudentActivities(@Param('id') student_id: string) {
    return this.studentActivityService.findStudentActivities(student_id);
  }

  @Get(':id')
  findOneStudentActivity(@Param('id') studentActivity_id: string) {
    return this.studentActivityService.findOne(studentActivity_id);
  }
  
  @HttpCode(HttpStatus.OK)
  @Post('files/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, callback) => {
        const allowedFileTypes = ['.png', '.jpg', '.jpeg', '.pdf', '.txt', '.zip']; // Definindo os tipos de arquivo permitidos
        
        const fileExt = extname(file.originalname).toLowerCase();
        if (!allowedFileTypes.includes(fileExt)) {
          return callback(new BadRequestException('Only PNG, JPG, JPEG, PDF and txt files are allowed!'), false);
        }

        callback(null, true);
      },
    }),
  )
  async uploadStudentActivityFiles(@UploadedFile() file, @Param('id') id: string) {
    const currentDate = new Date();
    const studentActivityData = (await this.studentActivityService.findOne(id)).receive_data;

    if (currentDate.getTime() > studentActivityData.getTime()) {
      throw new BadRequestException("Expired Date");
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    const fileBuffer = Buffer.from(file.buffer);

    if (file.size > maxSize) {
      throw new BadRequestException('File size exceeds the allowed limit of 5MB!');
    }

    return this.studentActivityService.uploadStudentActivityFiles(fileBuffer, id, file.mimetype);
  }
}
