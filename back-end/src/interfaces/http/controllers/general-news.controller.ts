import { Controller, Get, Param } from '@nestjs/common';
import { GeneralNewsService } from '../../../application/services/general-news.service';
import { SupabaseService } from '../../../application/services/supabase.service';

@Controller('general-news')
export class GeneralNewsController {
  constructor(private generalNewService: GeneralNewsService) {}

  @Get()
  findAll() {
    return this.generalNewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalNewService.findOne(id);
  }

  @Get(':fileName')
  findURL(@Param('fileName') fileName: string) {
    let supaBaseService: SupabaseService;
    return supaBaseService.getURL(fileName);
  }
}
