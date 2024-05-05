import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CourseUsers1714891561599 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "course_users",
        columns: [
          {
            name: "course_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "int",
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["course_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "courses",
            onDelete: "CASCADE",
          },
          {
            columnNames: ["user_id"],
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
    await queryRunner.dropTable("course_users");
  }
}
