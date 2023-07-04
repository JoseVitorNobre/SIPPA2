import { Module } from '@nestjs/common';
import { ClassPlanController } from '../../interfaces/http/controllers/class-plan.controller';
import { ClassPlanService } from '../services/class-plan.service';
import { PrismaModule } from '../../infrastructure/database/prisma/prisma.module';
import { ClassPlanRepository } from '../../infrastructure/repositories/class-plan.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ClassPlanController],
  providers: [ClassPlanService, ClassPlanRepository],
  exports: [ClassPlanService]
})
export class ClassPlanModule {}
