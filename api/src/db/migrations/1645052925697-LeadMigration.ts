import {MigrationInterface, QueryRunner} from "typeorm";

export class LeadMigration1645052925697 implements MigrationInterface {
    name = 'LeadMigration1645052925697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`lead\` ADD \`email\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`lead\` DROP COLUMN \`email\``);
    }

}
