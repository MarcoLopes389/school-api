import { Course } from 'src/modules/course/models/course.entity';
import { ICourseRepo } from '../../../src/modules/course/interfaces/course.repo.interface';
import { resultById } from './course-result.repo';
export class CourseRepoMock implements ICourseRepo {
  async getById(id: string): Promise<Course> {
    return resultById;
  }
}
