import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ParentStudent1713631216211 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "parents_students",
        columns: [
          {
            name: "parent_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "student_id",
            type: "int",
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["parent_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
          },
          {
            columnNames: ["student_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("parents_students");
  }
}
