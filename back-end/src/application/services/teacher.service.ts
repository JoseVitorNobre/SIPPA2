import { Injectable } from '@nestjs/common';
import { TeacherRepository } from '../../infrastructure/repositories/teacher.repository';

@Injectable()
export class TeacherService {
  constructor(private readonly teacherRepository: TeacherRepository){}
  findAll() {
    return this.teacherRepository.findAll();
  }

  findOne(cpf: string) {
    return this.teacherRepository.findByCPF(cpf);
  }

  findOneById(id:string){
    return this.teacherRepository.findById(id);
  }
}
