import { Role } from "../enums/role.enum";
import { Student } from "./student.entity";
import { Teacher } from "./teacher.entity";

export class User {
    id?: string;
    name: string;
    password: string;
    email: string;
    role: Role;
    student?: Student;
    teacher?: Teacher;
}
