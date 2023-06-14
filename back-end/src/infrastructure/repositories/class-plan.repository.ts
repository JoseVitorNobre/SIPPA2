import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class ClassPlanRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: number) {
    return await this.prisma.classPlan.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return await this.prisma.classPlan.findMany();
  }
}
