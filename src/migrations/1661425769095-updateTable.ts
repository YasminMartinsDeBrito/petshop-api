import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTable1661425769095 implements MigrationInterface {
    name = 'updateTable1661425769095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "history" ("historyId" uuid NOT NULL DEFAULT uuid_generate_v4(), "returning" TIMESTAMP, "package" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "petPetId" uuid, "userUserId" uuid, CONSTRAINT "PK_0ae5ef848621e74d81444759e6b" PRIMARY KEY ("historyId"))`);
        await queryRunner.query(`CREATE TABLE "schedules" ("scheduleId" uuid NOT NULL DEFAULT uuid_generate_v4(), "returning" TIMESTAMP, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "petPetId" uuid, CONSTRAINT "PK_be0de31e8aee28fcfa49498969e" PRIMARY KEY ("scheduleId"))`);
        await queryRunner.query(`CREATE TABLE "vaccines" ("vaccineId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "fabricante" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "petPetId" uuid, CONSTRAINT "PK_13224730e4838b4a9ae6a291783" PRIMARY KEY ("vaccineId"))`);
        await queryRunner.query(`CREATE TABLE "pets" ("petId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "birthdate" character varying NOT NULL, "sex" character varying NOT NULL, "type" character varying NOT NULL, "size" character varying NOT NULL, "img" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userUserId" uuid, CONSTRAINT "PK_e32ae7e411576493a190c55de8c" PRIMARY KEY ("petId"))`);
        await queryRunner.query(`CREATE TABLE "users" ("userId" uuid NOT NULL DEFAULT uuid_generate_v4(), "isAdm" boolean NOT NULL DEFAULT false, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "img" character varying, "email" character varying NOT NULL, "cpf" character varying(11) NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_8bf09ba754322ab9c22a215c919" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "address" ("addressId" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying NOT NULL, "district" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "number" integer NOT NULL, "zipcode" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userUserId" uuid, CONSTRAINT "REL_03e49a79ac4465ca87fcdd0029" UNIQUE ("userUserId"), CONSTRAINT "PK_ffc3e4d1012ae997d42d8ebe398" PRIMARY KEY ("addressId"))`);
        await queryRunner.query(`ALTER TABLE "history" ADD CONSTRAINT "FK_3094d0f67fff00f0af3294dad21" FOREIGN KEY ("petPetId") REFERENCES "pets"("petId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "history" ADD CONSTRAINT "FK_d7a3045a54c116c024c54ffc035" FOREIGN KEY ("userUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_847d2300580c31cf14ccacd9cad" FOREIGN KEY ("petPetId") REFERENCES "pets"("petId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vaccines" ADD CONSTRAINT "FK_26067ab93dff78b6a359ecc0e40" FOREIGN KEY ("petPetId") REFERENCES "pets"("petId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_588b48cb022e4fbdcee91b2dc2e" FOREIGN KEY ("userUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_03e49a79ac4465ca87fcdd00294" FOREIGN KEY ("userUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_03e49a79ac4465ca87fcdd00294"`);
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_588b48cb022e4fbdcee91b2dc2e"`);
        await queryRunner.query(`ALTER TABLE "vaccines" DROP CONSTRAINT "FK_26067ab93dff78b6a359ecc0e40"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_847d2300580c31cf14ccacd9cad"`);
        await queryRunner.query(`ALTER TABLE "history" DROP CONSTRAINT "FK_d7a3045a54c116c024c54ffc035"`);
        await queryRunner.query(`ALTER TABLE "history" DROP CONSTRAINT "FK_3094d0f67fff00f0af3294dad21"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "pets"`);
        await queryRunner.query(`DROP TABLE "vaccines"`);
        await queryRunner.query(`DROP TABLE "schedules"`);
        await queryRunner.query(`DROP TABLE "history"`);
    }

}
