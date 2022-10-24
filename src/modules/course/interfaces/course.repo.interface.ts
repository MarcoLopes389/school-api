import { CreateCourseDTO } from './../models/create-course.dto';
import { Course } from '../models/course.entity';

export interface ICourseRepo {
  getById(id: string): Promise<Course>;
  create(course: CreateCourseDTO): Promise<void>;
}
