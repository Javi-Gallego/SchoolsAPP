import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CoursesSubjects1713698037213 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "courses_subjects",
        columns: [
          {
            name: "course_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "subject_id",
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
            columnNames: ["subject_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "subjects",
            onDelete: "CASCADE",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("courses_subjects");
  }
}
