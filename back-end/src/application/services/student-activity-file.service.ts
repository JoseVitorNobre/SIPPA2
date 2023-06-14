import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentActivityFileService {
  findAll() {
    return `This action returns all studentActivityFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentActivityFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentActivityFile`;
  }
}
