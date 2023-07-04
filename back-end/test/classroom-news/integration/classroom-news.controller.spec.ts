import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { ClassroomNewsController } from '../../../src/interfaces/http/controllers/classroom-news.controller';
import { ClassroomNewsRepository } from '../../../src/infrastructure/repositories/classroom-news.repository';
import { ClassroomNewsService } from '../../../src/application/services/classroom-news.service';

describe('ClassroomNewsController', () => {
  let controller: ClassroomNewsController;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const classroomNewsRepository = new ClassroomNewsRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassroomNewsController],
      providers: [
        ClassroomNewsService,
        {
          provide: ClassroomNewsRepository,
          useValue: classroomNewsRepository,
        },
      ],
    }).compile();

    controller = module.get<ClassroomNewsController>(ClassroomNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET methods', () => {
    it('should return a list of classroom news', async () => {
      const classroomNews = await controller.findAll();

      expect(classroomNews).toBeInstanceOf(Array);
    });

    it('should return a list of classroom news', async () => {
      const newsId = "f2321964-f050-4d6b-944c-b1154f032772";

      const classroomNews = await controller.findOne(newsId);
      expect(classroomNews).toBeTruthy();
    });

  });
});
