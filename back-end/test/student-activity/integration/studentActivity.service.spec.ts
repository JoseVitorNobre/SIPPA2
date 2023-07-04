import { Test, TestingModule } from '@nestjs/testing';
import { StudentActivityService } from '../../../src/application/services/student-activity.service';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { StudentActivityRepository } from '../../../src/infrastructure/repositories/student-activity.repository';
import { ActivityService } from '../../../src/application/services/activity.service';
import { ActivityRepository } from '../../../src/infrastructure/repositories/activity.repository';
import { SupabaseService } from '../../../src/application/services/supabase.service';
import { FileService } from '../../../src/application/services/file.service';
import { FileRepository } from '../../../src/infrastructure/repositories/file.repository';
import { NotFoundException } from '@nestjs/common';

describe('StudentActivityService', () => {
    let service: StudentActivityService;
    let prismaService: PrismaService;

    beforeEach(async () => {
      const prismaModule: TestingModule = await Test.createTestingModule({
        providers: [PrismaService],
      }).compile();
      prismaService = prismaModule.get<PrismaService>(PrismaService);

      const studentActivityRepository = new StudentActivityRepository(prismaService);
      const activityRepository = new ActivityRepository(prismaService);
      const fileRepository = new FileRepository(prismaService);
      const supabaseService = new SupabaseService();
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          StudentActivityService,
          ActivityService,
          FileService,
          {
            provide: StudentActivityRepository,
            useValue: studentActivityRepository,
          },
          {
            provide: ActivityRepository,
            useValue: activityRepository
          },
          {
            provide: SupabaseService,
            useValue: supabaseService
          },
          {
            provide: FileRepository,
            useValue: fileRepository
          }
        ],
      }).compile();

      service = module.get<StudentActivityService>(StudentActivityService);
    });

    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    describe('GET methods', () => {
      it('should return a list of activities of a student', async () => {
        const student_id = "e7aaa266-117f-454d-b84c-65c205077b88";
        const activities = await service.findStudentActivities(student_id);

        expect(activities.activities.length || activities.exams.length).toBeGreaterThan(0);
      });

      it('should return details of a studentActivity', async () => {
        const studentActivity_id = "cd4ce7fe-baf0-4bca-b99c-80e4484c776c";

        expect(await service.findStudentActivities(studentActivity_id)).resolves;
      });

      it('should return a 404 if studentActivity is not found', async () => {
        const studentActivity_id = "2557b29d-85a2-43b0-85f9-e2613e9ad670";

        await expect(service.findOne(studentActivity_id)).rejects.toThrow(NotFoundException);
      });
    });
  });
