import { DescriptionValidator } from './../validators/description.validator';
import { DurationValidator } from './../validators/duration.validator';
import { ApiProperty } from '@nestjs/swagger';
import { Validate } from 'class-validator';

export class CreateCourseDTO {
  @ApiProperty({ nullable: true })
  id?: string;

  @ApiProperty()
  name: string;

  @Validate(DurationValidator)
  @ApiProperty()
  duration: string;

  @Validate(DescriptionValidator)
  @ApiProperty()
  description: string;
}
