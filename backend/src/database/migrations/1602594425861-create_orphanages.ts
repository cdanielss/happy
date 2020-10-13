import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrphanages1602594425861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Realiza as Alteracoes como criar tabela
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Desfaz as alteracoes do metodo up
    }

}
