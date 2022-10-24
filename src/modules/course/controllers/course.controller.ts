import { GetCourseQuery } from './../queries/impl/get-course.query';
import { Controller, Get, Param, Put } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Course } from '../models/course.entity';

@Controller()
export class CourseController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  async getCourse(@Param('id') id: string): Promise<Course> {
    return await this.queryBus.execute(new GetCourseQuery(id));
  }
}
