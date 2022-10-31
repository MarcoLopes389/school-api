import { CreateCourseDTO } from './../models/create-course.dto';
import { Course } from '../models/course.entity';
import { WithRequiredProperty } from 'src/common/utils/with-required-property.type';

export interface ICourseRepo {
  getById(id: string): Promise<Course>;
  getAll(): Promise<Course[]>;
  create(course: CreateCourseDTO): Promise<void>;
  delete(id: string): Promise<void>;
  update(course: WithRequiredProperty<Partial<Course>, 'id'>): Promise<void>;
}
