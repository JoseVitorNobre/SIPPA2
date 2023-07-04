import { Role } from "../enums/role.enum";

export interface UserPayload {
    sub: string;
    email: string;
    name: string;
    role: Role;
    enrollment?: number;
    cpf?: number;
    iat?: number;
    exp?: number;
}