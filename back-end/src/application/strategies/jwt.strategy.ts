import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Role } from "../../domain/enums/role.enum";
import { UserPayload } from "../../domain/models/UserPayload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: UserPayload) {
    return payload.role === Role.STUDENT ? {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      role: payload.role,
      enrollment: payload.enrollment
    } : {
    id: payload.sub,
      email: payload.email,
      name: payload.name,
      role: payload.role,
      cpf: payload.cpf
    }
  }
}
