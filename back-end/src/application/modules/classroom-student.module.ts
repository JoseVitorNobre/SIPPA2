import { Module } from '@nestjs/common';
import { ClassroomStudentService } from '../services/classroom-student.service';
import { ClassroomStudentController } from '../../interfaces/http/controllers/classroom-student.controller';
import { ClassroomStudentRepository } from '../../infrastructure/repositories/classroom-student.repository';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { SecondCallModule } from './second-call.module';

@Module({
  imports: [SecondCallModule],
  controllers: [ClassroomStudentController],
  providers: [ClassroomStudentService, ClassroomStudentRepository, PrismaService],
  exports: [ClassroomStudentService]
})
export class ClassroomStudentModule {}
