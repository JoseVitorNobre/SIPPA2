import { Role } from '../../../../domain/enums/role.enum';
import { CreateStudentDto } from '../student/create-student.dto';
import { createTeacherDto } from '../teacher/create-teacher.dto';
import { IsEmail, IsObject, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'albertosales32@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  role: Role;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  student?: CreateStudentDto;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  teacher?: createTeacherDto;
}
