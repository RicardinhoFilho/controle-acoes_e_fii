import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("segmento")
export class SegmentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  segmento: string;

  @Column()
  descricao: string;
}
