import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UsersRoles1713631471268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_roles",
        columns: [
          {
            name: "role_id",
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
            columnNames: ["role_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "roles",
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
    await queryRunner.dropTable("users_roles");
  }
}
