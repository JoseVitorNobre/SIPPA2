import { Module } from '@nestjs/common';
import { ClassroomService } from '../services/classroom.service';
import { ClassroomController } from '../../interfaces/http/controllers/classroom.controller';
import { ClassroomRepository } from '../../infrastructure/repositories/classroom.repository';
import { DisciplineModule } from './discipline.module';
import { TeacherModule } from './teacher.module';
import { UserModule } from './user.module';
import { ClassroomStudentModule } from './classroom-student.module';
import { GeneralNewsModule } from './general-news.module';
import { ClassroomNewsModule } from './classroom-news.module';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { StudentModule } from './student.module';
import { PlanModule } from './plan.module';
import { ClassPlanModule } from './class-plan.module';

@Module({
  imports: [
    DisciplineModule,
    TeacherModule,
    UserModule,
    ClassroomStudentModule,
    GeneralNewsModule,
    ClassroomNewsModule,
    StudentModule,
    PlanModule,
    ClassPlanModule,
  ],
  controllers: [ClassroomController],
  providers: [ClassroomService, ClassroomRepository, PrismaService],
  exports: [ClassroomService],
})
export class ClassroomModule {}
