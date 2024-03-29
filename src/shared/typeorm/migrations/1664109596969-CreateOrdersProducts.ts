import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrdersProducts1664109596969 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders_products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'quantity',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }
  /*  new TableForeignKey({
     name: 'OrdersProductsOrder',
     columnNames: ['order_id'],
     referencedColumnNames: ['id'],
     referencedTableName: 'orders',
     onDelete: 'CASCADE',
     onUpdate: 'CASCADE',
   }), */

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders_products');
    /*         await queryRunner.dropForeignKey('orders_products', 'OrdersProductsOrder');
            await queryRunner.dropForeignKey('orders_products', 'OrdersProductsProduct');
            await queryRunner.dropTable('orders_products'); */
  }
}
