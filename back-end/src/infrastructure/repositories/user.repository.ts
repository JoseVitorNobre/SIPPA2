import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";
import { CreateUserDto } from "../../interfaces/http/dtos/user/create-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createStudent(createUserDto: CreateUserDto) {
        const userData = {
            ...createUserDto,
            password: await bcrypt.hash(createUserDto.password, 10)
        }
        
        return await this.prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                role: userData.role,
                student: {
                    create: {
                      enrollment: userData.student.enrollment,
                      course: userData.student.course
                    },
                },
            },
            include: {
                student: true
            }
        })
    }
    async createTeacher(createUserDto: CreateUserDto) {
        return await this.prisma.user.create({
            data: {
                name: createUserDto.name,
                email: createUserDto.email,
                password: createUserDto.password,
                role: createUserDto.role,
                teacher: {
                    create: {
                      cpf: createUserDto.teacher.cpf
                    },
                },
            },
            include: {
                teacher: true
            }
        })
    }

    async findById(id: string, isStudent?: boolean) {
        if (isStudent === undefined) return this.prisma.user.findUnique({where: { id }})
        if (isStudent) return await this.prisma.user.findUnique({where: { id }, include: { student: true }});
        return await this.prisma.user.findUnique({where: { id }, include: { teacher: true }});
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: { email }
        })
    }

    async findAll() {
        return await this.prisma.user.findMany({});
    }
}