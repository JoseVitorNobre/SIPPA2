import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { DisciplineRepository } from '../../../src/infrastructure/repositories/discipline.repository';
import { DisciplineController } from '../../../src/interfaces/http/controllers/discipline.controller';
import { DisciplineService } from '../../../src/application/services/discipline.service';

describe('DisciplineController', () => {
  let controller: DisciplineController;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService]
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const disciplineRepository = new DisciplineRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisciplineController],
      providers: [ 
        DisciplineService,
         {
            provide: DisciplineRepository,
            useValue: disciplineRepository, 
         },
      ],
    }).compile();

    controller = module.get<DisciplineController>(DisciplineController);
  });

  it('should be defined', () => {
     expect(controller).toBeDefined();
  });

  it('should return a discipline by id', () => {
    const discipline_id = "04fa7cc4-8f6f-46b2-8a99-1adba5e25563";
    const discipline = controller.findOne(discipline_id);

    expect(discipline).toBeTruthy();
  });
});