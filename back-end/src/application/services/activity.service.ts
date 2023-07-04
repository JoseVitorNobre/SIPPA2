import { Injectable, NotFoundException } from '@nestjs/common';
import { ActivityRepository } from '../../infrastructure/repositories/activity.repository';
import { SupabaseService } from './supabase.service';

@Injectable()
export class ActivityService {
  constructor (
    private readonly activityRepository: ActivityRepository,
    private readonly supabaseService: SupabaseService
    ){}

  findAll() {
    return this.activityRepository.findAll();
  }

  async findOne(id: string) {
    const activity = await this.activityRepository.findById(id);
    if (!activity) throw new NotFoundException();
    let studentFile;
    let teacherFile;
    try {
      teacherFile = await this.supabaseService.getFileURL(`${activity.id}`, 'ActivityFiles');
    } catch (error) {
      teacherFile = null;
    }

    try {
      studentFile = await this.supabaseService.getFileURL(`${activity.id}`, 'StudentActivityFiles');
    } catch (error) {
      studentFile = null;
    }

    return {
      ...activity,
      studentfileUrl: studentFile,
      teacherfileUrl: teacherFile,
    };
  }

  async getActivitesByClassroom(classroom_id: string) {
    const activityReturn = (await this.activityRepository.findAll()).filter(
      (activity) => {
        if (activity.classroom_id === classroom_id) {
          return activity;
        }
      },
    );

    return activityReturn;
  }

  async getExamnsByClassroom(classroom_id: string) {
    const examReturn = (await this.activityRepository.findAll()).filter(
      (activity) => {
        if (activity.classroom_id === classroom_id && activity.is_exam && !activity.sendable) {
          return activity;
        }
      },
    );
    return examReturn;
  }

  async getProjectByClassroom(classroom_id: string) {
    const examReturn = (await this.activityRepository.findAll()).filter(
      (activity) => {
        if (activity.classroom_id === classroom_id && activity.is_exam && activity.sendable) {
          return activity;
        }
      },
    );
    return examReturn;
  }
}
