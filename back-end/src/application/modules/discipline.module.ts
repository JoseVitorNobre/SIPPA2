import { Module } from '@nestjs/common';
import { DisciplineService } from '../services/discipline.service';
import { DisciplineController } from '../../interfaces/http/controllers/discipline.controller';
import { DisciplineRepository } from '../../infrastructure/repositories/discipline.repository';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';

@Module({
  controllers: [DisciplineController],
  providers: [DisciplineService, DisciplineRepository, PrismaService],
  exports: [DisciplineService]
})
export class DisciplineModule {}
