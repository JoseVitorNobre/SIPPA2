import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserController } from '../../interfaces/http/controllers/user.controller';
import { PrismaModule } from '../../infrastructure/database/prisma/prisma.module';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../strategies/jwt.strategy';

@Module({
  imports: [PrismaModule, JwtModule.register({secret: process.env.JWT_SECRET, signOptions: {expiresIn:'1h'}})],
  controllers: [UserController],
  providers: [UserService, UserRepository, JwtStrategy],
  exports:[UserService]
})
export class UserModule {}
