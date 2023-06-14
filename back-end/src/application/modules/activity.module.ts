import { Module } from '@nestjs/common';
import { ActivityService } from '../services/activity.service';
import { ActivityController } from '../../interfaces/http/controllers/activity.controller';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { ActivityRepository } from 'src/infrastructure/repositories/activity.repository';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService, PrismaService, ActivityRepository]
})
export class ActivityModule {}
