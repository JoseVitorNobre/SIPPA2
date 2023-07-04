import { Test, TestingModule } from '@nestjs/testing';
import { ClassPlanService } from '../../../src/application/services/class-plan.service';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { ClassPlanRepository } from '../../../src/infrastructure/repositories/class-plan.repository';
import { ClassPlanController } from '../../../src/interfaces/http/controllers/class-plan.controller';

describe('ClassPlanService', () => {
  let service: ClassPlanService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const classPlanRepository = new ClassPlanRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassPlanController],
      providers: [
        ClassPlanService,
        {
          provide: ClassPlanRepository,
          useValue: classPlanRepository,
        },
      ],
    }).compile();

    service = module.get<ClassPlanService>(ClassPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('GET methods', () => {
    it('should return a list of class plans', async () => {
      const plan = await service.findAll();

      expect(plan).toBeInstanceOf(Array);
    });

    it('should return a class plan', async () => {
      const newsId = 1;

      const plan = await service.findOne(newsId);
      expect(plan).toBeTruthy();
    });

    it('should return a list of class plans based on the classroom', async () => {
      const planId = 'b9178913-819f-4539-8a14-c1575cf9c37b';

      const plan = await service.findByPlan(planId);
      expect(plan).toBeTruthy();
    });
  });
});
