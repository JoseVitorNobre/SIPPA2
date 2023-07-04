import { Test, TestingModule } from '@nestjs/testing';
import { GeneralNewsService } from '../../../src/application/services/general-news.service';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { GeneralNewsRepository } from '../../../src/infrastructure/repositories/general-news.repository';
import { GeneralNewsController } from '../../../src/interfaces/http/controllers/general-news.controller';
import { SupabaseService } from '../../../src/application/services/supabase.service';

describe('GeneralNewService', () => {
  let service: GeneralNewsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const generalNewsRepository = new GeneralNewsRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralNewsController],
      providers: [
        GeneralNewsService,
        SupabaseService,
        {
          provide: GeneralNewsRepository,
          useValue: generalNewsRepository,
        },
      ],
    }).compile();

    service = module.get<GeneralNewsService>(GeneralNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('GET methods', () => {
    it('should return a list of general news', async () => {
      const generalNews = await service.findAll();

      expect(generalNews).toBeInstanceOf(Array);
    }, 50000);

    it('should return one general news', async () => {
      const newsId = '4c29219a-0d43-40a3-ad1a-5df5f9602160';

      const generalNews = await service.findOne(newsId);
      expect(generalNews).toBeTruthy();
    });
  });
});
