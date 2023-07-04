import { Module } from '@nestjs/common';
import { FileService } from '../services/file.service';
import { SupabaseService } from '../services/supabase.service';
import { FileRepository } from '../../infrastructure/repositories/file.repository';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';

@Module({
  providers: [FileService, SupabaseService, FileRepository, PrismaService]
})
export class FileModule {}
