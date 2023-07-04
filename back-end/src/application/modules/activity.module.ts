import { Module } from '@nestjs/common';
import { ActivityService } from '../services/activity.service';
import { ActivityController } from '../../interfaces/http/controllers/activity.controller';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { ActivityRepository } from '../../infrastructure/repositories/activity.repository';
import { SupabaseService } from '../services/supabase.service';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService, PrismaService, ActivityRepository, SupabaseService],
  exports: [ActivityService, ActivityRepository],
})
export class ActivityModule {}
