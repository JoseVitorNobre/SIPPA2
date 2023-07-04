import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";
import { StudentActivity } from "../../domain/entities/student-activity.entity";

@Injectable()
export class FileRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(url: string, studentActivity_id: string, studentActivity?: StudentActivity) {
    return await this.prismaService.file.create({
      data: {
        url,
        studentActivity_id: studentActivity_id,
        
      }
    })
  }

  async findOne(url: string) {
    return await this.prismaService.file.findUnique({
      where: { url }
    })
  }

  async updateOne(url: string, file) {
    return await this.prismaService.file.update({
      where: {url},
      data: file
    })
  }

  async findMany() {
    return this.prismaService.file.findMany();
  }
}