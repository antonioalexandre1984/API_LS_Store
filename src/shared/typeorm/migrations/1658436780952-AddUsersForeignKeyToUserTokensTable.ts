/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddUsersForeignKeyToUserTokensTable1658436780952 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'user_tokens',
      new TableForeignKey({
        name: 'TokenUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('user_tokens', 'TokenUser');
  }
}
