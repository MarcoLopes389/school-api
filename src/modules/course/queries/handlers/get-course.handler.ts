import { ICourseRepo } from './../../interfaces/course.repo.interface';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCourseQuery } from '../impl/get-course.query';
import { Inject } from '@nestjs/common';
import { Course } from '../../models/course.entity';

@QueryHandler(GetCourseQuery)
export class GetCourseHandler implements IQueryHandler<GetCourseQuery> {
  constructor(
    @Inject('ICourseRepo')
    private repository: ICourseRepo,
  ) {}

  async execute(query: GetCourseQuery): Promise<Course> {
    return await this.repository.getById(query.id);
  }
}
