import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Parents1713468388570 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "parents",
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
            name: "phone",
            type: "int",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            length: "40",
            isUnique: true,
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
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("parents");
  }
}
