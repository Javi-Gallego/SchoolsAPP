import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Courses1713623781362 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "courses",
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
            name: "stage_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "year",
            type: "int",
            isNullable: false,
          },
          {
            name: "school_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "tutor_id",
            type: "int",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
            onUpdate: "now()",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["stage_id"],
            referencedTableName: "stages",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
          {
            columnNames: ["school_id"],
            referencedTableName: "schools",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
          {
            columnNames: ["tutor_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("courses");
  }
}
