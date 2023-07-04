import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { FileService } from '../../../src/application/services/file.service';
import { FileRepository } from '../../../src/infrastructure/repositories/file.repository';

describe('GeneralNewService', () => {
    let service: FileService;
    let prismaService: PrismaService;

    beforeEach(async () => {
      const prismaModule: TestingModule = await Test.createTestingModule({
        providers: [PrismaService],
      }).compile();
      prismaService = prismaModule.get<PrismaService>(PrismaService);

      const fileRepository = new FileRepository(prismaService);
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          FileService,
          {
            provide: FileRepository,
            useValue: fileRepository
          }
        ],
      }).compile();

      service = module.get<FileService>(FileService);
    });

    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    describe('GET methods', () => {
      it('should return a file', async () => {
        const fileUrl = "2557b29d-85a2-43b0-85f9-e2613e9ad671";
        const file = await service.findOne(fileUrl);

        expect(file).toBeTruthy;
      });
    });
  });
