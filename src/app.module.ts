import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { SchoolModule } from './modules/school/school.module';
import { CourseModule } from './modules/course/course.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './common/config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    UserModule,
    SchoolModule,
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
