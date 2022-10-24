import { Course } from 'src/modules/course/models/course.entity';
import { CreateCourseDTO } from 'src/modules/course/models/create-course.dto';
import { ICourseRepo } from '../../../src/modules/course/interfaces/course.repo.interface';
import { resultById } from './course-result.repo';
export class CourseRepoMock implements ICourseRepo {
  async create(course: CreateCourseDTO): Promise<void> {
    Promise.resolve();
  }
  async getById(id: string): Promise<Course> {
    if (id == 'sjdcjsbdcb') {
      return undefined;
    }
    return resultById;
  }
}
