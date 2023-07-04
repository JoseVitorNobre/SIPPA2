import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config({ path: 'test/.env.test' });

import { AuthService } from '../../../src/application/services/auth.service';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { StudentService } from '../../../src/application/services/student.service';
import { UserService } from '../../../src/application/services/user.service';
import { StudentRepository } from '../../../src/infrastructure/repositories/student.repository';
import { UserRepository } from '../../../src/infrastructure/repositories/user.repository';
import { Role } from '../../../src/domain/enums/role.enum';
import { User } from '../../../src/domain/entities/user.entity';
import { JwtStrategy } from '../../../src/application/strategies/jwt.strategy';

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService]
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const studentRepository = new StudentRepository(prismaService);
    const userRepository = new UserRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
      imports: [JwtModule.register({secret: process.env.JWT_SECRET, signOptions: {expiresIn:'1h'}})],
      providers: [
        AuthService,
        StudentService,
        UserService,
        JwtStrategy,
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

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('student', () => {
    const userDataAnouthenticated = {
      name:'fulando de tal',
      email:'email@email.com',
      password:'111111111',
      role: Role.STUDENT,
      student: {
        enrollment: 333333,
        course: "ES"
      }
    };

    const userDataAuthenticated: User = {
      id: "a339a513-a1db-453a-91e9-8eab80b60c2e",
      name:'Daniel Almeida',
      email:'ab11cd@gmail.com',
      password:'123Dan',
      role: Role.STUDENT,
      student: {
        enrollment: 342481,
        course: "ES"
      }
    };

    it('should return a 409 when data is incorrect', async () => {
      await expect(service.validateUser(userDataAnouthenticated.student.enrollment, userDataAnouthenticated.password)).rejects.toThrow(Error);
    });

    it('should return a user when data is correct', async () => {
      const responseValidate = await service.validateUser(userDataAuthenticated.student.enrollment, userDataAuthenticated.password);
      expect(Object.keys(responseValidate)).toEqual(["id", "email", "name", "password", "createdAt", "role", "student"]);
    });

    it('it should return user data and jwt token when authentication process is complete', async () => {
      const returnValue = await service.login(userDataAuthenticated);
      expect(Object.keys(returnValue)).toEqual(["returnData", "access_token"]);
    });
  })

});
