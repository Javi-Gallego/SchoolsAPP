import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Schools1713457310123 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "schools",
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
            name: "address",
            type: "varchar",
            length: "40",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "phone",
            type: "int",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "logo",
            type: "varchar",
            length: "40",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "web",
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
    await queryRunner.dropTable("schools");
  }
}
