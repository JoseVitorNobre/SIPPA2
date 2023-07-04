import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { ActivityService } from '../../../src/application/services/activity.service';
import { ActivityRepository } from '../../../src/infrastructure/repositories/activity.repository';
import { NotFoundException } from '@nestjs/common';
import { ActivityController } from '../../../src/interfaces/http/controllers/activity.controller';
import { SupabaseService } from '../../../src/application/services/supabase.service';

describe('ActivityController', () => {
    let controller: ActivityController;
    let prismaService: PrismaService;

    beforeEach(async () => {
      const prismaModule: TestingModule = await Test.createTestingModule({
        providers: [PrismaService],
      }).compile();
      prismaService = prismaModule.get<PrismaService>(PrismaService);

      const activityRepository = new ActivityRepository(prismaService);
      const supabaseService = new SupabaseService();
      const module: TestingModule = await Test.createTestingModule({
        controllers: [ActivityController],
        providers: [
          ActivityService,
          {
            provide: ActivityRepository,
            useValue: activityRepository
          },
          {
            provide: SupabaseService,
            useValue: supabaseService
          }
        ],
      }).compile();

      controller = module.get<ActivityController>(ActivityController);
    });

    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    describe('GET methods', () => {
      it('should return a activity', async () => {
        const activity_id = "50d3f29b-544b-4c18-a535-95df9035c449";
        const activity = await controller.findOne(activity_id);

        expect(activity).toBeInstanceOf(Object);
      });

      it('should return a 404 when a activity is not found', async () => {
        const activity_id = "4f44d7f3-4057-45ca-8e54-695d2b3ac734";

        await expect(controller.findOne(activity_id)).rejects.toThrow(NotFoundException);
      });
    });
  });
