import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'course' })
export class Course {
  @ApiProperty()
  @PrimaryColumn({ generated: 'uuid' })
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  duration: string;

  @ApiProperty()
  @Column()
  description: string;
}
