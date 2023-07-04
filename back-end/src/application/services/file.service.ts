import { Injectable } from '@nestjs/common';
import { StudentActivity } from '../../domain/entities/student-activity.entity';
import { FileRepository } from '../../infrastructure/repositories/file.repository';

@Injectable()
export class FileService {
  constructor(private readonly fileRepository: FileRepository){};

  findAll() {
    return this.fileRepository.findMany();
  }

  async create(url: string, studentActivity_id: string) {
    return await this.fileRepository.create(url, studentActivity_id);
  }

  async findOne(url: string) {
    return await this.fileRepository.findOne(url);
  }

  async updateOne(url: string, file) {
    return await this.fileRepository.updateOne(url, file);
  }
}
