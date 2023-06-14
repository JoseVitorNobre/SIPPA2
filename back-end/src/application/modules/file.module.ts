import { Module } from '@nestjs/common';
import { FileService } from '../services/file.service';
import { SupabaseService } from '../services/supabase.service';

@Module({
  providers: [FileService, SupabaseService]
})
export class FileModule {}
