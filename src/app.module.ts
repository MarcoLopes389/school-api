import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SchoolModule } from './school/school.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [UserModule, SchoolModule, CourseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
