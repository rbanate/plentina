import {MigrationInterface, QueryRunner} from "typeorm";

export class LeadMigration1644932582791 implements MigrationInterface {
    name = 'LeadMigration1644932582791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`lead\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`mobileNumber\` varchar(255) NOT NULL, \`officeNumber\` varchar(255) NOT NULL, \`companyName\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`lead\``);
    }

}
