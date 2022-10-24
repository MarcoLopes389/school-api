import { CreateCourseDTO } from './../models/create-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../models/course.entity';
import { ICourseRepo } from './../interfaces/course.repo.interface';
export class CourseRepo implements ICourseRepo {
  constructor(
    @InjectRepository(Course)
    private repo: Repository<Course>,
  ) {}

  async create(course: CreateCourseDTO): Promise<void> {
    await this.repo.insert(course);
  }

  async getById(id: string): Promise<Course> {
    return await this.repo.findOneBy({ id });
  }
}
