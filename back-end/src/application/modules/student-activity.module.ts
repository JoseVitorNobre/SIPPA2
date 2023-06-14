import { Module } from '@nestjs/common';
import { StudentActivityService } from '../services/student-activity.service';
import { StudentActivityController } from '../../interfaces/http/controllers/student-activity.controller';
import { StudentActivityRepository } from 'src/infrastructure/repositories/student-activity.repository';
import { ActivityService } from '../services/activity.service';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { ActivityRepository } from 'src/infrastructure/repositories/activity.repository';

@Module({
  controllers: [StudentActivityController],
  providers: [StudentActivityService, StudentActivityController, StudentActivityRepository, ActivityService, PrismaService, ActivityRepository]
})
export class StudentActivityModule {}
