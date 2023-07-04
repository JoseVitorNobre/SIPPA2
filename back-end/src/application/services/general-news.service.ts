import { Injectable } from '@nestjs/common';
import { GeneralNewsRepository } from '../../infrastructure/repositories/general-news.repository';
import { SupabaseService } from './supabase.service';

@Injectable()
export class GeneralNewsService {
  constructor(
    private generalNewsRepository: GeneralNewsRepository,
    private supabaseService: SupabaseService,
  ) {}

  async findAll() {
    const generalNews = await this.generalNewsRepository.findAll();
    const generalNewsReturn = await Promise.all(
      generalNews.map(async (generalNew) => {
        const generalNewsFind = await this.generalNewsRepository.findById(
          generalNew.id,
        );
        const URL = await this.supabaseService.getURL(generalNew.image);
        const encodedImg = await this.supabaseService.encodeImage(URL);
        return {
          generalNewsFind,
          URL,
          encodedImg,
        };
      }),
    );
    return generalNewsReturn;
  }

  async findOne(id: string) {
    const returnGeneralNews = (await this.generalNewsRepository.findAll()).find(
      (generalNews) => {
        if (generalNews.id === id) return generalNews;
      },
    );

    const URL = await this.supabaseService.getURL(returnGeneralNews.image);

    const encodedImg = await this.supabaseService.encodeImage(URL);

    return {
      returnGeneralNews,
      URL,
      encodedImg,
    };
  }
}
