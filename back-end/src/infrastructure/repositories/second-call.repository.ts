import { Injectable } from '@nestjs/common';
import { CreateSecondCallDto } from '../../interfaces/http/dtos/second-call/create-second-call.dto';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class SecondCallRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string) {
    return await this.prisma.secondCall.findUnique({
      where: { id },
    });
  }

  async findMany() {
    return await this.prisma.secondCall.findMany();
  }

  async removeSecondCall(id: string) {
    await this.prisma.secondCall.delete({
      where: { id },
    });
  }

  async createSecondCall(createSecondCallDto: CreateSecondCallDto) {
    const activity = await this.prisma.activity.findUnique({
      where: { id: createSecondCallDto.activity_id },
    });
    return await this.prisma.secondCall.create({
      data: {
        justify: createSecondCallDto.justify,
        activity: {
          connect: {
            id: activity.id,
          },
        },
        approved: false,
        student_id: createSecondCallDto.student_id,
        classroom_id: createSecondCallDto.classroom_id,
      },
    });
  }
}
