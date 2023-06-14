import { Test, TestingModule } from '@nestjs/testing';
import { PlanService } from '../../../src/application/services/plan.service';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { PlanRepository } from '../../../src/infrastructure/repositories/plan.repository';
import { PlanController } from '../../../src/interfaces/http/controllers/plan.controller';

describe('PlanService', () => {
  let service: PlanService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const planRepository = new PlanRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanController],
      providers: [
        PlanService,
        {
          provide: PlanRepository,
          useValue: planRepository,
        },
      ],
    }).compile();

    service = module.get<PlanService>(PlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('GET methods', () => {
    it('should return a list of plans', async () => {
      const plan = await service.findAll();

      expect(plan).toBeInstanceOf(Array);
    });

    it('should return a plan', async () => {
      const newsId = 'b9178913-819f-4539-8a14-c1575cf9c37b';

      const plan = await service.findOne(newsId);
      expect(plan).toBeTruthy();
    });
  });
});
