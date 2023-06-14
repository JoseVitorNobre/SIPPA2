import { Injectable } from '@nestjs/common';
import { ClassroomNewsRepository } from '../../infrastructure/repositories/classroom-news.repository';

@Injectable()
export class ClassroomNewsService {
  constructor(private classroomNewsRepository: ClassroomNewsRepository) {}

  findAll() {
    return this.classroomNewsRepository.findAll();
  }

  findOne(id: string) {
    return this.classroomNewsRepository.findById(id);
  }
}
