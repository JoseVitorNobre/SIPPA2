import { ApiProperty } from '@nestjs/swagger';
export class createTeacherDto {
  @ApiProperty({ example: '128.234.125-99' })
  cpf: string;
}
