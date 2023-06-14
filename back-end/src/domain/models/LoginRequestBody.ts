import { IsNumber, IsString } from 'class-validator';

export class LoginRequestBody {
  @IsNumber()
  enrollment: number;

  @IsString()
  password: string;
}