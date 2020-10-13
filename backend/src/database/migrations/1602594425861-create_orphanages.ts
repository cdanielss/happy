import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602594425861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Realiza as Alteracoes como criar tabela

        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                }, 
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Desfaz as alteracoes do metodo up

        await queryRunner.dropTable('orphanages');
    }

}
