import { Controller, Get, Param } from '@nestjs/common';
import { ClassroomNewsService } from '../../../application/services/classroom-news.service';
import { SupabaseService } from '../../../application/services/supabase.service';

@Controller('classroom-news')
export class ClassroomNewsController {
  constructor(private classroomNewService: ClassroomNewsService) {}

  @Get()
  findAll() {
    return this.classroomNewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classroomNewService.findOne(id);
  }

  @Get(':fileName')
  findURL(@Param('fileName') fileName: string) {
    let supaBaseService: SupabaseService;
    return supaBaseService.getURL(fileName);
  }
}
