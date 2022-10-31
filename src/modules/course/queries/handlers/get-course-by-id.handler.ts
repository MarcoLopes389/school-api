import { UndefinedPropertyError } from './../../../../common/errors/undefined-property.error';
import { ICourseRepo } from '../../interfaces/course.repo.interface';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCourseByIdQuery } from '../impl/get-course-by-id.query';
import { Inject } from '@nestjs/common';
import { Course } from '../../models/course.entity';

@QueryHandler(GetCourseByIdQuery)
export class GetCourseByIdHandler implements IQueryHandler<GetCourseByIdQuery> {
  constructor(
    @Inject('ICourseRepo')
    private repository: ICourseRepo,
  ) {}

  async execute(query: GetCourseByIdQuery): Promise<Course> {
    if (!query.id) {
      throw new UndefinedPropertyError();
    }

    return await this.repository.getById(query.id);
  }
}
