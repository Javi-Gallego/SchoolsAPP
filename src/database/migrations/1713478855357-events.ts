import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Events1713478855357 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "events",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "title",
            type: "varchar",
            length: "40",
            isNullable: false,
          },
          {
            name: "date",
            type: "varchar",
            length: "40",
            isNullable: false,
          },
          {
            name: "message",
            type: "varchar",
            length: "40",
            isNullable: false,
          },
          {
            name: "publisher_id",
            type: "int",
            length: "40",
            isNullable: false,
          },
          {
            name: "course_id",
            type: "int",
            length: "40",
            isNullable: false,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("events");
  }
}
