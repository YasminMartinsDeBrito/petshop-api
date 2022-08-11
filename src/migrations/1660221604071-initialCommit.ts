import { MigrationInterface, QueryRunner } from "typeorm";

export class initialCommit1660221604071 implements MigrationInterface {
    name = 'initialCommit1660221604071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_03e49a79ac4465ca87fcdd00294"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "REL_03e49a79ac4465ca87fcdd0029"`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_03e49a79ac4465ca87fcdd00294" FOREIGN KEY ("userUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_03e49a79ac4465ca87fcdd00294"`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "REL_03e49a79ac4465ca87fcdd0029" UNIQUE ("userUserId")`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_03e49a79ac4465ca87fcdd00294" FOREIGN KEY ("userUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
