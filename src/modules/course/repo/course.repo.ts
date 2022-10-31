import { CreateCourseDTO } from './../models/create-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../models/course.entity';
import { ICourseRepo } from './../interfaces/course.repo.interface';
import { WithRequiredProperty } from 'src/common/utils/with-required-property.type';
export class CourseRepo implements ICourseRepo {
  constructor(
    @InjectRepository(Course)
    private repo: Repository<Course>,
  ) {}

  async update(
    course: WithRequiredProperty<Partial<Course>, 'id'>,
  ): Promise<void> {
    await this.repo.update({ id: course.id }, course);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete({ id });
  }

  async create(course: CreateCourseDTO): Promise<void> {
    await this.repo.insert(course);
  }

  async getById(id: string): Promise<Course> {
    return await this.repo.findOneBy({ id });
  }

  async getAll(): Promise<Course[]> {
    return await this.repo.find();
  }
}
