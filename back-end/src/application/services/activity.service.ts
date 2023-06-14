import { Injectable } from '@nestjs/common';
import { ActivityRepository } from 'src/infrastructure/repositories/activity.repository';

@Injectable()
export class ActivityService {
  constructor (private readonly activityRepository: ActivityRepository){}

  findAll() {
    return this.activityRepository.findAll();
  }

  findOne(id: string) {
    return this.activityRepository.findById(id);
  }

}
