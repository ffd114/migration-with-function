import {MigrationInterface, QueryRunner} from "typeorm";

export class Test21520580487538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "public"."user" ALTER COLUMN "createdAt" TYPE TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "public"."user" ALTER COLUMN "createdAt" SET DEFAULT NOW()`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`-- TODO: revert ALTER TABLE "public"."user" ALTER COLUMN "createdAt" SET DEFAULT NOW()`);
        await queryRunner.query(`-- TODO: revert ALTER TABLE "public"."user" ALTER COLUMN "createdAt" TYPE TIMESTAMP WITH TIME ZONE`);
    }

}
