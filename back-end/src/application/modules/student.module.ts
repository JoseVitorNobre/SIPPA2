import { Module } from '@nestjs/common';
import { StudentService } from '../../application/services/student.service';
import { StudentController } from '../../interfaces/http/controllers/student.controller';
import { StudentRepository } from '../../infrastructure/repositories/student.repository';
import { PrismaModule } from '../../infrastructure/database/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
  exports:[StudentService]
})
export class StudentModule {}
