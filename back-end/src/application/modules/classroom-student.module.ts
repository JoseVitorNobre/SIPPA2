import { Module } from '@nestjs/common';
import { ClassroomStudentService } from '../services/classroom-student.service';
import { ClassroomStudentController } from '../../interfaces/http/controllers/classroom-student.controller';
import { ClassroomStudentRepository } from '../../infrastructure/repositories/classroom-student.repository';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';

@Module({
  controllers: [ClassroomStudentController],
  providers: [ClassroomStudentService, ClassroomStudentRepository, PrismaService],
  exports: [ClassroomStudentService]
})
export class ClassroomStudentModule {}
