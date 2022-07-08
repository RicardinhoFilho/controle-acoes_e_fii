import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class VENDA1656508194620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "VENDA",
            columns: [
              {
                name: "ID",
                type: "INT NOT NULL AUTO_INCREMENT PRIMARY KEY",
                generationStrategy: "increment",
              },
              {
                name: "LOTE_ID",
                type: "int",
              },
              {
                name: "QUANTIDADE",
                type: "INT",
              },
              {
                name: "VALOR_UNIDADE",
                type: "DECIMAL(18,2)",
              },
            ],
            foreignKeys: [
              {
                name: "Fk_VENDA_LOTE",
                referencedTableName: "LOTE",
                referencedColumnNames: ["id"],
                columnNames: ["LOTE_ID"],
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("VENDA");
      }

}
