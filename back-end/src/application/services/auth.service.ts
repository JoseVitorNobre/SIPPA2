import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { StudentService } from './student.service';
import { UserService } from './user.service';
import { User } from '../../domain/entities/user.entity';
import { Role } from '../../domain/enums/role.enum';
import { JwtService } from '@nestjs/jwt';
import { getStudentCourse } from '../usecases/getStudentCourse.usecase';
import { UserLoginReturn } from '../../domain/models/UserLoginReturn';
import { UserDataReturn } from '../../domain/models/UserDataReturn';

@Injectable()
export class AuthService {
    constructor(
        private readonly studentService: StudentService, 
        private readonly userService: UserService, 
        private readonly jwtService: JwtService
    ){}
    
    async validateUser(enrollment: number, password: string) {
        const student = await this.studentService.findOneByEnrollment(enrollment);
        
        if (student) {
            const user = await this.userService.findOneById(student.user_id);
            const userReturn = {
                ...user,
                student: student
            }
            const isPasswordValid = await bcrypt.compare(password, userReturn.password);
            if (isPasswordValid) return {
                ...userReturn, 
                password: undefined
            };
        }
        
        throw new Error("The provided data is incorrect");
    }
    
    async login(user: User): Promise<UserLoginReturn> {
        const role = user.role;
        let returnData: UserDataReturn;

        const payload = role === Role.STUDENT ? {
            sub: user.id,
            email: user.email,
            name: user.name,
            enrollment: user.student.enrollment,
            student_id: user.student.id
        } : {
            sub: user.id,
            email: user.email,
            name: user.name,
            cpf: user.teacher.cpf
        }

        const jwtToken = this.jwtService.sign(payload);

        if (role === Role.STUDENT) {
            const course = getStudentCourse(user.student.course);
            returnData = {
                id: user.id,
                email: user.email,
                name: user.name,
                enrollment: user.student.enrollment,
                course: course,
                student_id: payload.student_id            
            }
        } else {
            returnData = {
                id: user.id,
                email: user.email,
                name: user.name,
                cpf: user.teacher.cpf 
            }
        }
        
        return {
            returnData,
            access_token: jwtToken
        }
    }
}
