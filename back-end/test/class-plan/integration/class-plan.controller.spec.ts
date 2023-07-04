import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { ClassPlanController } from '../../../src/interfaces/http/controllers/class-plan.controller';
import { ClassPlanRepository } from '../../../src/infrastructure/repositories/class-plan.repository';
import { ClassPlanService } from '../../../src/application/services/class-plan.service';

describe('ClassPlanController', () => {
  let controller: ClassPlanController;
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

    controller = module.get<ClassPlanController>(ClassPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET methods', () => {
    it('should return a list of class plans', async () => {
      const plan = await controller.findAll();

      expect(plan).toBeInstanceOf(Array);
    });

    it('should return a class plan', async () => {
      const planId = 1;

      const plan = await controller.findOne(planId);
      expect(plan).toBeTruthy();
    });
  });
});
