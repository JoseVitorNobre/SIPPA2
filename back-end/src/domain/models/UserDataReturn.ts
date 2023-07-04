import { ClassroomStudent } from "../entities/classroom-student.entity" 

export interface UserDataReturn {
    id: string,
    email: string,
    name: string,
    enrollment?: number,
    course?: string,
    student_id?: string
    cpf?: string
}