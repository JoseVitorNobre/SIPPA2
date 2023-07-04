import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, NotFoundException } from '@nestjs/common';

import { UserService } from '../../../src/application/services/user.service';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { UserRepository } from '../../../src/infrastructure/repositories/user.repository';
import { Role } from '../../../src/domain/enums/role.enum';

describe('UserService', () => {
  let service: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService]
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const userRepository = new UserRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: userRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
     expect(service).toBeDefined();
  });

  describe('GET methods', () => {
    it('should return a 404 when user is not found', async () => {
      const id = "044f9aae-69a2-4385-8bc9-0a1001dd4cd1";

      await expect(service.findOneById(id)).rejects.toThrow(NotFoundException);
    })

    it('should return a user when one is found', async () => {
      const id = "044f9aae-69a2-4385-8bc9-0a1001dd4cd4";
      
      const user = await service.findOneById(id);
      expect(user).toBeTruthy();
    })   

    it('should return a list of users', async () => {
      const users = await service.findAll();
      
      expect(users).toBeInstanceOf(Array)
    }) 
  })

  describe('POST method', () => {
    it('should return a 409 status when some unique value cause conflict', async () => {
      const user = {name:'fulando de tal', email:'ab12cd@gmail.com', password:'111111111', role: Role.STUDENT};

      await expect(service.create(user)).rejects.toThrow(ConflictException);
    })
  })

});