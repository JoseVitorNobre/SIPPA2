import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  //está usando enrollment, que não está presente no professor, tem que ver depois como mudar, usar um guard diferente, talves
  constructor(private authService: AuthService) {
    super({ usernameField: 'enrollment' });
  }

  validate(enrollment: number, password: string) {
    return this.authService.validateUser(enrollment, password);
  }
}