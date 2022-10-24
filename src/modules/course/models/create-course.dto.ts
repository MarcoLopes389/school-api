import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  duration: string;

  @ApiProperty()
  description: string;
}
