import { Course } from './../../modules/course/models/course.entity';
import { ConfigModule } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    if (process.env.NODE_ENV == 'development') {
      return {
        type: 'sqlite',
        database: 'db.sqlite',
        entities: [Course],
        migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
        migrationsRun: true,
        migrationsTableName: 'migrations_history',
        synchronize: true,
        logging: true,
      };
    }
  },
};
