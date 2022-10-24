import { DataSource } from 'typeorm';
export const datasource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [__dirname + '/../../**/*{.ts,.js}'],
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  migrationsRun: true,
  migrationsTableName: 'migrations_history',
});
