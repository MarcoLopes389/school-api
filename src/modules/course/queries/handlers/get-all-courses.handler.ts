import { Course } from './../../models/course.entity';
import { ICourseRepo } from './../../interfaces/course.repo.interface';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllCoursesQuery } from '../impl/get-all-courses.query';

@QueryHandler(GetAllCoursesQuery)
export class GetAllCoursesHandler implements IQueryHandler<GetAllCoursesQuery> {
  constructor(
    @Inject('ICourseRepo')
    private repository: ICourseRepo,
  ) {}

  async execute(): Promise<Course[]> {
    return await this.repository.getAll();
  }
}
