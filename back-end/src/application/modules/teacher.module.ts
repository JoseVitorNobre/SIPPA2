import { Module } from '@nestjs/common';
import { TeacherService } from '../services/teacher.service';
import { TeacherController } from '../../interfaces/http/controllers/teacher.controller';
import { TeacherRepository } from '../../infrastructure/repositories/teacher.repository';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';

@Module({
  controllers: [TeacherController],
  providers: [TeacherService, TeacherRepository, PrismaService],
  exports: [TeacherService]
})
export class TeacherModule {}
