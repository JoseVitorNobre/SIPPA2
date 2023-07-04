import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityService } from '../../../application/services/activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  findAll() {
    return this.activityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.activityService.findOne(id);
  }

  @Get('/classroom/:classroom_id')
  getActivitesByClassroom(@Param('classroom_id') classroom_id: string){
    return this.activityService.getActivitesByClassroom(classroom_id);
  }

  @Get('/examns/:classroom_id')
  getExamnsByClassroom(@Param('classroom_id') classroom_id: string){
    return this.activityService.getExamnsByClassroom(classroom_id);
  }

  @Get('/project/:classroom_id')
  getProjectByClassroom(@Param('classroom_id') classroom_id: string){
    return this.activityService.getProjectByClassroom(classroom_id);
  }
}
