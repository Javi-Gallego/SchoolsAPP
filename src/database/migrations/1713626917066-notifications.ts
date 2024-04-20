import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Notifications1713626917066 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "notifications",
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
            name: "stage_id",
            type: "int",
            length: "40",
            isNullable: true,
          },
          {
            name: "course_id",
            type: "int",
            length: "40",
            isNullable: false,
          },
          {
            name: "school_id",
            type: "int",
            length: "40",
            isNullable: false,
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
            columnNames: ["pusblisher_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
          {
            columnNames: ["stage_id"],
            referencedTableName: "stages",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
          {
            columnNames: ["course_id"],
            referencedTableName: "courses",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
          {
            columnNames: ["school_id"],
            referencedTableName: "schools",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("notifications");
  }
}
