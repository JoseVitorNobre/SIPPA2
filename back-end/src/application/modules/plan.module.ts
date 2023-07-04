import { Module } from '@nestjs/common';
import { PlanService } from '../services/plan.service';
import { PlanController } from '../../interfaces/http/controllers/plan.controller';
import { PlanRepository } from '../../infrastructure/repositories/plan.repository';
import { PrismaModule } from '../../infrastructure/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlanController],
  providers: [PlanService, PlanRepository],
  exports: [PlanService],
})
export class PlanModule {}
