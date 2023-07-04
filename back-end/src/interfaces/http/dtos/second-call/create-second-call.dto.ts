import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateActivityDto } from '../activity/create-activity.dto';

export class CreateSecondCallDto {
  @ApiProperty()
  @IsString()
  justify: string;

  @ApiProperty()
  @IsString()
  activity_id: string;

  @ApiProperty()
  @IsString()
  student_id: string;

  @ApiProperty()
  @IsString()
  classroom_id: string;
}
