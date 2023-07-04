import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";

@Injectable()
export class TeacherRepository {
    constructor(private prisma: PrismaService) {}

    async findById(id: string) {
        return await this.prisma.teacher.findUnique({
            where: {id}
        })
    }

    async findByCPF(cpf: string) {
        return await this.prisma.teacher.findUnique({
            where: {cpf}
        })
    }

    async findAll() {
        return await this.prisma.teacher.findMany();
    }
}