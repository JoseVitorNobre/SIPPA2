import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, NotFoundException } from '@nestjs/common';

import { ClassroomService } from '../../../src/application/services/classroom.service';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { ClassroomRepository } from '../../../src/infrastructure/repositories/classroom.repository';
import { Role } from '../../../src/domain/enums/role.enum';
import { DisciplineService } from '../../../src/application/services/discipline.service';
import { TeacherService } from '../../../src/application/services/teacher.service';
import { UserService } from '../../../src/application/services/user.service';
import { ClassroomStudentService } from '../../../src/application/services/classroom-student.service';
import { DisciplineRepository } from '../../../src/infrastructure/repositories/discipline.repository';
import { UserRepository } from '../../../src/infrastructure/repositories/user.repository';
import { TeacherRepository } from '../../../src/infrastructure/repositories/teacher.repository';
import { ClassroomStudentRepository } from '../../../src/infrastructure/repositories/classroom-student.repository';
import { StudentService } from '../../../src/application/services/student.service';
import { StudentRepository } from '../../../src/infrastructure/repositories/student.repository';
import { ClassroomNewsService } from 'src/application/services/classroom-news.service';
import { ClassroomNewsRepository } from 'src/infrastructure/repositories/classroom-news.repository';

describe('ClassroomService', () => {
  let service: ClassroomService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService]
    }).compile();
    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const classroomRepository = new ClassroomRepository(prismaService);
    const classroomStudentRepository = new ClassroomStudentRepository(prismaService);
    const disciplineRepository = new DisciplineRepository(prismaService);
    const teacherRepository = new TeacherRepository(prismaService);
    const userRepository = new UserRepository(prismaService);
    const classroomNewsRepository = new ClassroomNewsRepository(prismaService);
    const studentRepository = new StudentRepository(prismaService);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassroomService,
        DisciplineService,
        TeacherService,
        UserService,
        StudentService,
        ClassroomStudentService,
        ClassroomNewsService,
        {
            provide: ClassroomRepository,
            useValue: classroomRepository,
        },
        {
            provide: DisciplineRepository,
            useValue: disciplineRepository,
        },
        {
            provide: TeacherRepository,
            useValue: teacherRepository,
        },
        {
            provide: UserRepository,
            useValue: userRepository,
        },
        {
          provide: ClassroomNewsRepository,
          useValue: classroomNewsRepository,
        },
        {
            provide: ClassroomStudentRepository,
            useValue: classroomStudentRepository,
        },
        {
          provide: StudentRepository,
          useValue: studentRepository,
      },
      ],
    }).compile();

    service = module.get<ClassroomService>(ClassroomService);
  });

  it('should be defined', () => {
     expect(service).toBeDefined();
  });

  describe('GET methods', () => {
    it('should return a list of classroom of a student', async () => {
        const student_id = "58d2b8b7-e1eb-455b-9707-e67943c6d65d";
        const classroomsFromStudent_id = await service.findMany(student_id);

        expect(classroomsFromStudent_id).toBeInstanceOf(Array);
    });

    it('should return a 404 when student_id is not found', async () => {
      const student_id = "58d2b8b7-e1eb-455b-9707-e67943c6d65c";

      await expect(service.findOne(student_id)).rejects.toThrow(NotFoundException);
    });

    it('should return a list of students from a classroom', async () => {
      //not implemented
      expect(true).toBe(true);
    });

    it('should return a 404 when a classroom is not found', async () => {
      //not implemented
      expect(true).toBe(true);
    });

    it('should return a list of classroom news based on the classroom id', async () => {
      const classroomNewsList = await service.findClassroomNews('8b4d89a6-d51a-4a0d-92b3-dc723d8ed299');

      expect(classroomNewsList).toBeInstanceOf(Array);
    });
  });
});