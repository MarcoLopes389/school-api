import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCourseQuery } from '../impl/get-course.query';

@QueryHandler(GetCourseQuery)
export class GetCourseHandler implements IQueryHandler<GetCourseQuery> {
  execute(query: GetCourseQuery): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
