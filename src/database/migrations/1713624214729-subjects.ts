import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Subjects1713624214729 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "subjects",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            length: "40",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "school_id",
            type: "int",
            length: "10",
            isNullable: false,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("subjects");
  }
}
