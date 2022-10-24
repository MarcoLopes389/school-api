import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDTO {
  @ApiProperty({ nullable: true })
  id?: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  duration: string;

  @ApiProperty()
  description: string;
}
