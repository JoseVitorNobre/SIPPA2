import { Injectable, NotFoundException } from '@nestjs/common';
import { SecondCallRepository } from '../../infrastructure/repositories/second-call.repository';
import { ActivityService } from './activity.service';
import { CreateSecondCallDto } from '../../interfaces/http/dtos/second-call/create-second-call.dto';

@Injectable()
export class SecondCallService {
  constructor(
    private readonly secondCallRepository: SecondCallRepository,
    private readonly activityService: ActivityService,
  ) {}

  async findAll() {
    const secondCalls = await this.secondCallRepository.findMany();
    return await Promise.all(
      secondCalls.map(async (secondCall) => {
        const activity = await this.activityService.findOne(secondCall.activity_id);
        return {
          ...secondCall,
          activity_title: activity.title,
        };
      }),
    );
  }

  async findOne(id: string) {
    const secondCall = await this.secondCallRepository.findOne(id);
    if(!secondCall) throw new NotFoundException();
    const activity = await this.activityService.findOne(secondCall.activity_id);
    return {
      ...secondCall,
      activity_title: activity.title,
    };
  }

  async findByClasroomStudent(classroom_id: string, student_id: string) {
    const secondCalls = (await this.secondCallRepository.findMany()).filter(
      (secondCall) => {
        if (secondCall.classroom_id == classroom_id && secondCall.student_id == student_id) {
          return secondCall;
        }
      },
    );

    const secondCallsReturn = await Promise.all(
      secondCalls.map(async (secondCall) => {
        if (secondCall.classroom_id == classroom_id && secondCall.student_id == student_id) {
          const activity = await this.activityService.findOne(secondCall.activity_id);
          return {
            ...secondCall,
            activity_title: activity.title,
          };
        }
      }),
    );
    return secondCallsReturn;
  }

  async findExamNames(classroom_id: string, student_id: string) {
    const secondCalls = await this.findByClasroomStudent(classroom_id, student_id);
    if (secondCalls.length === 0) return '';

    const activities = await this.activityService.getExamnsByClassroom(classroom_id);
    const validExams = await Promise.all(
      activities.map(async (activity) => {
        const secondCall = secondCalls.find((second_call) => {
          if (second_call.activity_id == activity.id) {
            return second_call;
          }
        });
        if (!secondCall) {
          return {
            id: activity.id,
            title: activity.title,
          };
        }
      }),
    );
    return validExams;
  }

  async create(createSecondCallDto: CreateSecondCallDto) {
    return this.secondCallRepository.createSecondCall(createSecondCallDto);
  }

  async delete(id: string) {
    const secondCall = await this.secondCallRepository.findOne(id);
    if (secondCall) {
      this.secondCallRepository.removeSecondCall(id);
    } else {
      throw new NotFoundException();
    }
  }
}
