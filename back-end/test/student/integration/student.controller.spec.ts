import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from '../../../src/interfaces/http/controllers/student.controller';
import { StudentService } from '../../../src/application/services/student.service';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { StudentRepository } from '../../../src/infrastructure/repositories/student.repository';
import { NotFoundException } from '@nestjs/common';

describe('StudentController', () => {
  let controller: StudentController;
  let prismaService: PrismaService;
  
  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService]
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const studentRepository = new StudentRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
       controllers: [StudentController],
       providers: [
        StudentService,
        {
           provide: StudentRepository,
           useValue: studentRepository, 
        },
      ],
    }).compile();

     controller = module.get<StudentController>(StudentController);
   });

   it('should be defined', () => {
     expect(controller).toBeDefined();
  });
});
