import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../../interfaces/http/dtos/user/create-user.dto';
import { UpdateUserDto } from '../../interfaces/http/dtos/user/update-user.dto';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { Role } from '../../domain/enums/role.enum';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findByEmail(createUserDto.email);
    if (existUser) throw new ConflictException();

    if (createUserDto.role === Role.STUDENT) return this.userRepository.createStudent(createUserDto);
    return this.userRepository.createTeacher(createUserDto);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOneById(id: string) {
    const user = await this.userRepository.findById(id);
    if (user) {
      let userReturn: any;

      if (user.role === Role.STUDENT) userReturn = await this.userRepository.findById(user.id, true);
      else userReturn = await this.userRepository.findById(user.id, false);
      
      return userReturn;
    };

    throw new NotFoundException();
  }
}
