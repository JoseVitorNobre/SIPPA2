import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class PlanRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    return await this.prisma.plan.findUnique({
      where: { id }
    });
  }

  async findAll() {
    return await this.prisma.plan.findMany();
  }
}
