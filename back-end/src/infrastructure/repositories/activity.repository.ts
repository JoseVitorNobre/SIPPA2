import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";

@Injectable()
export class ActivityRepository {
    constructor(private prisma: PrismaService) {}

    async findById(id: string) {
        return await this.prisma.activity.findUnique({
            where: {id}
        })
    }

    async findAll() {
        return await this.prisma.activity.findMany();
    }
}