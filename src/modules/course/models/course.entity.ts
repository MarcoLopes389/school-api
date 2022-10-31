import { DurationValidator } from './../validators/duration.validator';
import { DescriptionValidator } from './../validators/description.validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'course' })
export class Course {
  @ApiProperty()
  @PrimaryColumn({ generated: 'uuid' })
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @IsNotEmpty()
  @Validate(DurationValidator)
  @ApiProperty()
  @Column()
  duration: string;

  @IsNotEmpty()
  @Validate(DescriptionValidator)
  @ApiProperty()
  @Column()
  description: string;
}
