import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCreatedAt1520580448841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP "createdAt"`);
    }

}
