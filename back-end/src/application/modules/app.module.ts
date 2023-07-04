import { Module } from '@nestjs/common';
import { AppController } from '../../interfaces/http/controllers/app.controller';
import { AppService } from '../../application/services/app.service';
import { StudentModule } from './student.module';
import { UserModule } from './user.module';
import { AuthModule } from './auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../../interfaces/http/guards/jwt-auth.guard';
import { ClassroomStudentModule } from './classroom-student.module';
import { ClassroomModule } from './classroom.module';
import { DisciplineModule } from './discipline.module';
import { StudentActivityModule } from './student-activity.module';
import { ActivityModule } from './activity.module';

@Module({
  imports: [StudentModule, UserModule, AuthModule, ClassroomStudentModule, ClassroomModule, DisciplineModule, StudentActivityModule, ActivityModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtAuthGuard}],
})
export class AppModule {}
