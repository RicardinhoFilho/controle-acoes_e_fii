import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class EMPRESA1656506257196 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "EMPRESA",
        columns: [
          {
            name: "ID",
            type: "INT NOT NULL AUTO_INCREMENT PRIMARY KEY",
            generationStrategy: "increment",
          },
          {
            name: "SIGLA",
            type: "varchar(10)",
            isUnique: true,
          },
          {
            name: "NOME",
            type: "varchar(100)",
          },
          {
            name: "SEGMENTO_ID",
            type: "INT",
          },
          {
            name: "FII",
            type: "boolean",
            default: false,
          },
        ],
        foreignKeys: [
          {
            name: "Fk_EMPRESA_SEGMENTO",
            referencedTableName: "SEGMENTO",
            referencedColumnNames: ["id"],
            columnNames: ["SEGMENTO_ID"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("EMPRESA");
  }
}
