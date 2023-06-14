import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";

@Injectable()
export class ClassroomRepository {
    constructor(private prisma: PrismaService) {}

    async findById(id: string) {
        return await this.prisma.classroom.findUnique({
            where: {id}
        })
    }

    async findAll() {
        return await this.prisma.classroom.findMany();
    }
}