import { Course } from '../../../../domain/enums/course.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  enrollment: number;

  @ApiProperty({ enum: ['ES', 'DD', 'CC', 'EC', 'RC', 'SI'] })
  course: Course;
}
