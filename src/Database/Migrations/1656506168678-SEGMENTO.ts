import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class SEGMENTO1656506168678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "SEGMENTO",
            columns: [
              {
                name: "id",
                type: "INT NOT NULL AUTO_INCREMENT PRIMARY KEY",
                generationStrategy: "increment",
              },
              {
                name: "SEGMENTO",
                type: "varchar(150)",
              },
              {
                name: "DESCRICAO",
                type: "varchar(200)",
              }
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("SEGMENTO");
      }

}
