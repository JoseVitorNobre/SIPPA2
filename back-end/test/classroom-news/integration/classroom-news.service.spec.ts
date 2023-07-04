import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomNewsService } from '../../../src/application/services/classroom-news.service';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { ClassroomNewsRepository } from '../../../src/infrastructure/repositories/classroom-news.repository';
import { ClassroomNewsController } from '../../../src/interfaces/http/controllers/classroom-news.controller';

describe('ClassroomNewService', () => {
  let service: ClassroomNewsService;
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

    service = module.get<ClassroomNewsService>(ClassroomNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('GET methods', () => {
    it('should return a list of classroom news', async () => {
      const classroomNews = await service.findAll();

      expect(classroomNews).toBeInstanceOf(Array);
    });

    it('should return a list of classroom news', async () => {
      const newsId = "f2321964-f050-4d6b-944c-b1154f032772";

      const classroomNews = await service.findOne(newsId);
      expect(classroomNews).toBeTruthy();
    });

  });
});
