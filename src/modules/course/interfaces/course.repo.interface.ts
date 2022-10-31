import { CreateCourseDTO } from './../models/create-course.dto';
import { Course } from '../models/course.entity';

export interface ICourseRepo {
  getById(id: string): Promise<Course>;
  getAll(): Promise<Course[]>;
  create(course: CreateCourseDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
