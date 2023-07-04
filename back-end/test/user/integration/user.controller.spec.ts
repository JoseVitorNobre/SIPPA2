import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../../../src/interfaces/http/controllers/user.controller';
import { UserService } from '../../../src/application/services/user.service';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { UserRepository } from '../../../src/infrastructure/repositories/user.repository';

describe('UserController', () => {
  let controller: UserController;
  let prismaService: PrismaService;
  
  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService]
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const userRepository = new UserRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
       controllers: [UserController],
       providers: [
        UserService,
        {
           provide: UserRepository,
           useValue: UserRepository, 
        },
      ],
    }).compile();

     controller = module.get<UserController>(UserController);
   });

   it('should be defined', () => {
     expect(controller).toBeDefined();
  });
});