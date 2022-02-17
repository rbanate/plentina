import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1644843896367 implements MigrationInterface {
    name = 'UserMigration1644843896367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
