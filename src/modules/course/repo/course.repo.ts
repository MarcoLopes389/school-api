import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../models/course.entity';
import { ICourseRepo } from './../interfaces/course.repo.interface';
export class CourseRepo implements ICourseRepo {
  constructor(
    @InjectRepository(Course)
    private repo: Repository<Course>,
  ) {}

  async getById(id: string): Promise<Course> {
    return await this.repo.findOne({
      where: {
        id,
      },
    });
  }
}
