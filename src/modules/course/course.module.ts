import { CqrsModule } from '@nestjs/cqrs';
import { CourseController } from './controllers/course.controller';
import { CourseRepo } from './repo/course.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Course } from './models/course.entity';
import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Course])],
  providers: [
    {
      provide: 'ICourseRepo',
      useClass: CourseRepo,
    },
    ...QueryHandlers,
    ...CommandHandlers,
  ],
  controllers: [CourseController],
  exports: [TypeOrmModule],
})
export class CourseModule {}
