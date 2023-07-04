import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { PlanController } from '../../../src/interfaces/http/controllers/plan.controller';
import { PlanRepository } from '../../../src/infrastructure/repositories/plan.repository';
import { PlanService } from '../../../src/application/services/plan.service';

describe('PlanController', () => {
  let controller: PlanController;
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

    controller = module.get<PlanController>(PlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET methods', () => {
    it('should return a list of plans', async () => {
      const plan = await controller.findAll();

      expect(plan).toBeInstanceOf(Array);
    });

    it('should return a plan', async () => {
      const planId = 'b9178913-819f-4539-8a14-c1575cf9c37b';

      const plan = await controller.findOne(planId);
      expect(plan).toBeTruthy();
    });
  });
});
