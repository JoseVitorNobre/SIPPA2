import { Controller, Post, Request, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';

import { AuthService } from '../../../application/services/auth.service';
import { AuthRequest } from '../../../../src/domain/models/AuthRequest';
import { IsPublic } from '../decorators/is-public.decorator';
import { LocalAuthGuard } from '../guards/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}
  
  //para resolver o problema de fluxo de autenticação de teacher e estudante, crie rotas '/login/student' e '/login/teacher' que usam guards específicos
  @IsPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login(@Request() req: AuthRequest) {
    return this.AuthService.login(req.user);
  }
}
