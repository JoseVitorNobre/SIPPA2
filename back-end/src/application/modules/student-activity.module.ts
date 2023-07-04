import { Module } from '@nestjs/common';
import { StudentActivityService } from '../services/student-activity.service';
import { StudentActivityController } from '../../interfaces/http/controllers/student-activity.controller';
import { StudentActivityRepository } from '../../infrastructure/repositories/student-activity.repository';
import { ActivityService } from '../services/activity.service';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { ActivityRepository } from '../../infrastructure/repositories/activity.repository';
import { SupabaseService } from '../services/supabase.service';
import { FileService } from '../services/file.service';
import { FileRepository } from '../../infrastructure/repositories/file.repository';

@Module({
  controllers: [StudentActivityController],
  providers: [
    StudentActivityService, 
    StudentActivityController, 
    StudentActivityRepository, 
    ActivityService, 
    PrismaService, 
    ActivityRepository,
    SupabaseService,
    FileService,
    FileRepository
  ]
})
export class StudentActivityModule {}
