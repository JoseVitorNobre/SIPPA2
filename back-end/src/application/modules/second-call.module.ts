import { Module } from '@nestjs/common';
import { PrismaModule } from '../../infrastructure/database/prisma/prisma.module';
import { SecondCallController } from '../../interfaces/http/controllers/second-call.controller';
import { SecondCallService } from '../services/second-call.service';
import { SecondCallRepository } from '../../infrastructure/repositories/second-call.repository';
import { ActivityService } from '../services/activity.service';
import { ActivityModule } from './activity.module';
import { SupabaseService } from '../services/supabase.service';

@Module({
  imports: [PrismaModule, ActivityModule],
  controllers: [SecondCallController],
  providers: [SecondCallService, SecondCallRepository, ActivityService, SupabaseService],
  exports: [SecondCallService],
})
export class SecondCallModule {}
