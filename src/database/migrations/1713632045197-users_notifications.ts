import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UsersNotifications1713632045197 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_notifications",
        columns: [
          {
            name: "user_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "notification_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "read",
            type: "boolean",
            default: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
          },
          {
            columnNames: ["notification_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "notifications",
            onDelete: "CASCADE",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users_notifications");
  }
}
