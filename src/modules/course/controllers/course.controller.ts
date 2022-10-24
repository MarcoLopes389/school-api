import { CreateCourseDTO } from './../models/create-course.dto';
import { CreateCourseCommand } from './../commands/impl/create-course.command';
import { GetCourseQuery } from './../queries/impl/get-course.query';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Course } from '../models/course.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Course')
@Controller('course')
export class CourseController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  @HttpCode(200)
  async getCourse(@Param('id') id: string): Promise<Course> {
    return await this.queryBus.execute(new GetCourseQuery(id));
  }

  @Put()
  @HttpCode(201)
  async createCourse(@Body() course: CreateCourseDTO): Promise<void> {
    await this.commandBus.execute(new CreateCourseCommand(course));
  }
}
