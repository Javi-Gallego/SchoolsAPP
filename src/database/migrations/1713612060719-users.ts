import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1713612060719 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "first_name",
            type: "varchar",
            length: "40",
            isNullable: false,
          },
          {
            name: "last_name",
            type: "varchar",
            length: "40",
            isNullable: false,
          },
          {
            name: "second_last_name",
            type: "varchar",
            length: "40",
            isNullable: false,
          },
          {
            name: "birthday",
            type: "date",
            isNullable: false,
          },
          {
            name: "phone",
            type: "int",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            length: "40",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "password_hash",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "profile_photo",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "school_id",
            type: "int",
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
    await queryRunner.dropTable("users");
  }
}
