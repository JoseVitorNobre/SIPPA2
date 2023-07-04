import { Injectable } from '@nestjs/common';
import { UpdateStudentDto } from '../../interfaces/http/dtos/student/update-student.dto';
import { StudentRepository } from '../../infrastructure/repositories/student.repository';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async findAll() {
    return await this.studentRepository.findAll();
  }

  async findOneByEnrollment(enrollment: number) {
    return await this.studentRepository.findByEnrollment(enrollment);
  }

  async findOneById(id: string) {
    return await this.studentRepository.findById(id);
  }
}
