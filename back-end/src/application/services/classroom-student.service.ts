import { Injectable } from '@nestjs/common';

import { ClassroomStudentRepository } from '../../infrastructure/repositories/classroom-student.repository';

@Injectable()
export class ClassroomStudentService {
  constructor(private classroomStudentRepository: ClassroomStudentRepository) {}
  // async findByStudentId(student_id: string) {
  //     return await this.prisma.studentActivity.findUnique({
  //         where: {student_id}
  //     })
  // }

  async findAll() {
      return await this.classroomStudentRepository.findAll()
  }
}
