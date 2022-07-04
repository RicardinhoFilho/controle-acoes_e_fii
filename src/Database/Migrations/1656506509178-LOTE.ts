import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class LOTE1656506509178 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "LOTE",
        columns: [
          {
            name: "ID",
            type: "INT NOT NULL AUTO_INCREMENT PRIMARY KEY",
            generationStrategy: "increment",
          },
          {
            name: "USUARIO_ID",
            type: "int",
          },
          {
            name: "QUANTIDADE",
            type: "INT",
          },
          {
            name: "VALOR_UNIDADE",
            type: "DECIMAL",
          },
          {
            name: "EMPRESA_ID",
            type: "INT",
          },
        ],
        foreignKeys: [
          {
            name: "Fk_LOTE_EMPRESA",
            referencedTableName: "EMPRESA",
            referencedColumnNames: ["id"],
            columnNames: ["EMPRESA_ID"],
          },

          {
            name: "Fk_LOTE_USUARIO",
            referencedTableName: "USUARIO",
            referencedColumnNames: ["id"],
            columnNames: ["USUARIO_ID"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("LOTE");
  }
}
