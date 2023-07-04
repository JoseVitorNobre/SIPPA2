import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class CreateActivityDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsDate()
  receive_data?: Date;

  @ApiProperty()
  @IsString()
  classroom_id: string;

  @ApiProperty()
  points: number;

  @ApiProperty()
  is_frequency_worthing: boolean;

  @ApiProperty()
  is_exam: boolean;

  @ApiProperty()
  sendable: boolean;

  @ApiProperty()
  @IsString()
  file?: string;
}
