import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from '../services/auth.service';
import { AuthController } from '../../interfaces/http/controllers/auth.controller';
import { LocalStrategy } from '../strategies/local.strategy';
import { UserModule } from './user.module';
import { StudentModule } from './student.module';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { LoginValidationMiddleware } from '../../interfaces/http/middlewares/login-validation.middleware';
import { ClassroomModule } from './classroom.module';

@Module({
  imports:[UserModule, 
    StudentModule,
    ClassroomModule,
    JwtModule.register({secret: process.env.JWT_SECRET, signOptions: {expiresIn:'1h'}})
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})

export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}
