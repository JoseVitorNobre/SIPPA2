import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/infrastructure/database/prisma/prisma.module';
import { GeneralNewsController } from 'src/interfaces/http/controllers/general-news.controller';
import { GeneralNewsService } from '../services/general-news.service';
import { GeneralNewsRepository } from 'src/infrastructure/repositories/general-news.repository';
import { SupabaseService } from '../services/supabase.service';

@Module({
  imports: [PrismaModule],
  controllers: [GeneralNewsController],
  providers: [GeneralNewsService, GeneralNewsRepository, SupabaseService],
  exports: [GeneralNewsService]
})
export class GeneralNewsModule {}
