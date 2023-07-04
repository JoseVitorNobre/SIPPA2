import { Module } from '@nestjs/common';
import { PrismaModule } from '../../infrastructure/database/prisma/prisma.module';
import { GeneralNewsController } from '../../interfaces/http/controllers/general-news.controller';
import { GeneralNewsService } from '../services/general-news.service';
import { GeneralNewsRepository } from '../../infrastructure/repositories/general-news.repository';
import { SupabaseService } from '../services/supabase.service';

@Module({
  imports: [PrismaModule],
  controllers: [GeneralNewsController],
  providers: [GeneralNewsService, GeneralNewsRepository, SupabaseService],
  exports: [GeneralNewsService]
})
export class GeneralNewsModule {}
