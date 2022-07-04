import { MigrationInterface, QueryRunner, Table } from "typeorm";
export class USUARIO1656505420510 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "USUARIO",
        columns: [
          {
            name: "id",
            type: "INT NOT NULL AUTO_INCREMENT PRIMARY KEY",
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "varchar(100)",
          },
          {
            name: "email",
            type: "varchar(100)",
          },

          {
            name: "senha",
            type: "varchar(100)",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("USUARIO");
  }
}
