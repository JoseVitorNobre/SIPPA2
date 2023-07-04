import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';

import { AuthController } from '../../../src/interfaces/http/controllers/auth.controller';
import { AuthService } from '../../../src/application/services/auth.service';
import { StudentService } from '../../../src/application/services/student.service';
import { UserService } from '../../../src/application/services/user.service';
import { StudentRepository } from '../../../src/infrastructure/repositories/student.repository';
import { UserRepository } from '../../../src/infrastructure/repositories/user.repository';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';

describe('AuthController', () => {
  let controller: AuthController;
  let prismaService: PrismaService;
  
  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService]
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);
    
    const studentRepository = new StudentRepository(prismaService);
    const userRepository = new UserRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        StudentService,
        UserService,
        JwtService,
        {
          provide: StudentRepository,
          useValue: studentRepository, 
        },
        {
          provide: UserRepository,
          useValue: userRepository, 
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
