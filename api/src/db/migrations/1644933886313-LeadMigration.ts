import {MigrationInterface, QueryRunner} from "typeorm";

export class LeadMigration1644933886313 implements MigrationInterface {
    name = 'LeadMigration1644933886313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`lead\` CHANGE \`firstName\` \`firstName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`lead\` CHANGE \`lastName\` \`lastName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`lead\` CHANGE \`officeNumber\` \`officeNumber\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`lead\` CHANGE \`companyName\` \`companyName\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`lead\` CHANGE \`companyName\` \`companyName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`lead\` CHANGE \`officeNumber\` \`officeNumber\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`lead\` CHANGE \`lastName\` \`lastName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`lead\` CHANGE \`firstName\` \`firstName\` varchar(255) NOT NULL`);
    }

}
