import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'course' })
export class Course {
  @PrimaryColumn({ generated: 'uuid' })
  id: string;

  @Column()
  name: string;

  @Column()
  duration: string;

  @Column()
  description: string;
}
