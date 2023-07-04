import { Injectable } from '@nestjs/common';
import { DisciplineRepository } from '../../infrastructure/repositories/discipline.repository';

@Injectable()
export class DisciplineService {
  constructor(private readonly disciplineRepository: DisciplineRepository){}

  findAll() {
    return this.disciplineRepository.findAll();
  }

  findOne(id: string) {
    return this.disciplineRepository.findById(id);
  }
}
