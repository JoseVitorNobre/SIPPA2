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
  findOne(@Param('id') id: string) {
    return this.activityService.findOne(id);
  }

}
