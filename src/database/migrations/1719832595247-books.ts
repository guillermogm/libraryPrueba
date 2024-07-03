import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Books1719832595247 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "70",
                    },
                    {
                        name: "description",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "author_id",
                        type: "int",
                    },
                ],
                foreignKeys:[{
                    columnNames:['author_id'],
                    referencedTableName:'authors',
                    referencedColumnNames:['id']
                }]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books')
    }

}
