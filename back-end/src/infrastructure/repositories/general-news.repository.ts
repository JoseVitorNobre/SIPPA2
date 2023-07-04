import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class GeneralNewsRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    return await this.prisma.generalNew.findUnique({
      where: { id }
    });
  }

  async findAll() {
    return await this.prisma.generalNew.findMany();
  }
}
