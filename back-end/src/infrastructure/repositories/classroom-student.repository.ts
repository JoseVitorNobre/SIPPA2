import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";

@Injectable()
export class ClassroomStudentRepository {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return await this.prisma.classroomStudent.findMany();
    }
}