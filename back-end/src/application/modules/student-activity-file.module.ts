import { Module } from '@nestjs/common';
import { StudentActivityFileService } from '../services/student-activity-file.service';
import { StudentActivityFileController } from '../../interfaces/http/controllers/student-activity-file.controller';

@Module({
  controllers: [StudentActivityFileController],
  providers: [StudentActivityFileService]
})
export class StudentActivityFileModule {}
