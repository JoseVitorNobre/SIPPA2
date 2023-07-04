import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from '../../../src/application/services/student.service';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { StudentRepository } from '../../../src/infrastructure/repositories/student.repository';

describe('StudentService', () => {
  let service: StudentService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService]
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const studentRepository = new StudentRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
      providers: [ 
        StudentService,
         {
            provide: StudentRepository,
            useValue: studentRepository, 
         },
      ],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  it('should be defined', () => {
     expect(service).toBeDefined();
  });
});