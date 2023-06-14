import { Module } from '@nestjs/common';
import { ClassroomNewsController } from 'src/interfaces/http/controllers/classroom-news.controller';
import { ClassroomNewsService } from '../services/classroom-news.service';
import { PrismaModule } from 'src/infrastructure/database/prisma/prisma.module';
import { ClassroomNewsRepository } from 'src/infrastructure/repositories/classroom-news.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ClassroomNewsController],
  providers: [ClassroomNewsService, ClassroomNewsRepository],
  exports: [ClassroomNewsService]
})
export class ClassroomNewsModule {}
