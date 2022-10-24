import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class course1666630416452 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'course',
        columns: [
          {
            name: 'id',
            isGenerated: true,
            type: 'uuid',
          },
          {
            name: 'duration',
            type: 'char varying',
          },
          {
            name: 'name',
            type: 'char varying',
          },
          {
            name: 'description',
            type: 'char varying',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('course');
  }
}
