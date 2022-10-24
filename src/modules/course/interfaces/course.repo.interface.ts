import { Course } from '../models/course.entity';

export interface ICourseRepo {
  getById(id: string): Promise<Course>;
}
