import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";
import { StudentActivity } from "@prisma/client";

@Injectable()
export class StudentActivityRepository {
    constructor(private prisma: PrismaService) {}

    async findById(id: string) {
        return await this.prisma.studentActivity.findUnique({
            where: { id },
        })
    }

    async findAll() {
        return await this.prisma.studentActivity.findMany();
    }

    async updateActivitySended(studentActivityUpdated: StudentActivity, id: string, url: string) {
        return await this.prisma.studentActivity.update({
            where: {id},
            data: {
                ...studentActivityUpdated,
                files: {connect: {url: url}}
            }
        });
    }
}