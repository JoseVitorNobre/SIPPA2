import { Injectable } from '@nestjs/common';
import { FileRepository } from 'src/infrastructure/repositories/file.repository';

@Injectable()
export class FileService {
  constructor(private readonly fileRepository: FileRepository){};

  findAll() {
    return `This action returns all file`;
  }

  create(fileName: string, bucketName: string, file: Buffer) {
    return this.fileRepository.createFile(fileName, bucketName, file);
  }

  findOne(fileName: string, bucketName: string) {
    return this.fileRepository.readFile(fileName, bucketName);
  }

  remove(fileName: string, bucketName: string) {
    return this.fileRepository.deleteFile(fileName, bucketName);
  }
}
