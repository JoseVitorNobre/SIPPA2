import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { ActivityService } from '../../../src/application/services/activity.service';
import { SecondCallService } from '../../../src/application/services/second-call.service';
import { SecondCallRepository } from '../../../src/infrastructure/repositories/second-call.repository';
import { ActivityRepository } from '../../../src/infrastructure/repositories/activity.repository';
import { NotFoundException } from '@nestjs/common';
import { SupabaseService } from '../../../src/application/services/supabase.service';

describe('SecondCallService', () => {
  let service: SecondCallService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const prismaModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    prismaService = prismaModule.get<PrismaService>(PrismaService);

    const secondCallRepository = new SecondCallRepository(prismaService);
    const activityRepository = new ActivityRepository(prismaService);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActivityService,
        SecondCallService,
        SupabaseService,
        {
          provide: SecondCallRepository,
          useValue: secondCallRepository,
        },
        {
          provide: ActivityRepository,
          useValue: activityRepository,
        },
      ],
    }).compile();

    service = module.get<SecondCallService>(SecondCallService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('GET methods', () => {
    it('should return a list of second-calls', async () => {
      const secondCalls = await service.findAll();

      expect(secondCalls).toBeInstanceOf(Array);
    });

    it('should return a second-calls', async () => {
      const secondCallId = '7a864a2a-139b-4b4c-a4ec-c2ebb20c2c4d';

      const secondCall = await service.findOne(secondCallId);
      expect(secondCall).toBeTruthy();
    });

    it('should return a list of second-calls of a classroom student', async () => {
      const classroomId = 'fa290d83-09f7-4e1d-a56d-ab7231a3bb11';
      const studentId = 'e7aaa266-117f-454d-b84c-65c205077b88';

      const secondCalls = await service.findByClasroomStudent(classroomId, studentId);
      expect(secondCalls).toBeInstanceOf(Array);
    });

    it('should return nothing when giving not valid values of classroom student', async () => {
      const classroomId = 'fa290d83-09f7-4e1d-a56d-ab7231a3bb11';
      const studentId = 'AAAAAA';

      const secondCalls = await service.findByClasroomStudent(classroomId, studentId);
      expect(secondCalls.length).toBe(0);
    });
  });

  describe('POST methods', () => {
    it('should create a second-call', async () => {
      const secondCall = {
        justify: 'Estive gripado',
        activity_id: '4f44d7f3-4057-45ca-8e54-695d2b3ac735',
        student_id: 'e7aaa266-117f-454d-b84c-65c205077b88',
        classroom_id: 'fa290d83-09f7-4e1d-a56d-ab7231a3bb11',
      };

      expect(await service.create(secondCall)).resolves;
    });
  });

  describe('DELETE methods', () => {
    it('should delete a second-call', async () => {
      const secondCall = {
        justify: 'Estive gripado',
        activity_id: '4f44d7f3-4057-45ca-8e54-695d2b3ac735',
        student_id: 'e7aaa266-117f-454d-b84c-65c205077b88',
        classroom_id: 'fa290d83-09f7-4e1d-a56d-ab7231a3bb11',
      };

      const secondCalls = (await service.findAll()).find((second_call) => {
        if (
          secondCall.activity_id === second_call.activity_id &&
          secondCall.classroom_id === second_call.classroom_id &&
          secondCall.student_id === second_call.student_id
        ) {
          return second_call;
        }
      });

      expect(service.delete(secondCalls.id)).resolves;
    });

    it('should return 404 when deleting a second-call', async () => {
      const secondCall = 'IdInexistente';

      await expect(service.delete(secondCall)).rejects.toThrow(NotFoundException)
    });
  });
});
