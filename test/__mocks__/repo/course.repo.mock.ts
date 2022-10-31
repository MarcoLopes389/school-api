import { Course } from '../../../src/modules/course/models/course.entity';
import { CreateCourseDTO } from '../../../src/modules/course/models/create-course.dto';
import { ICourseRepo } from '../../../src/modules/course/interfaces/course.repo.interface';
import { courseResults } from './course-result.repo';

let executionCount = 0;

export class CourseRepoMock implements ICourseRepo {
  async delete(id: string): Promise<void> {
    Promise.resolve();
  }
  async getAll(): Promise<Course[]> {
    executionCount += 1;

    if (executionCount == 2) {
      return courseResults;
    }
    return [];
  }
  async create(course: CreateCourseDTO): Promise<void> {
    Promise.resolve();
  }
  async getById(id: string): Promise<Course> {
    const course = courseResults.find((course) => {
      return course.id == id;
    });

    return course;
  }
}
