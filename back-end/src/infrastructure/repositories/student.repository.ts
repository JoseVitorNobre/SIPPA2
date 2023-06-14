import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";

@Injectable()
export class StudentRepository {
    constructor(private prisma: PrismaService) {}

    async findById(id: string) {
        return await this.prisma.student.findUnique({
            where: {id}
        })
    }

    async findByEnrollment(enrollment: number) {
        return await this.prisma.student.findUnique({
            where: {enrollment}
        })
    }

    async findAll() {
        return await this.prisma.student.findMany();
    }
}