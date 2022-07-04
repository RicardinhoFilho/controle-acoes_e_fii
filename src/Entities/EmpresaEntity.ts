import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { SegmentoEntity } from "./SegmentoEntity";
@Entity("empresa")
export class EmpresaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sigla: string;

  @Column()
  nome: string;

  @Column()
  segmento_id: number;

  @Column()
  fii: boolean;

  @JoinColumn({ name: "segmento_id" })
  @ManyToOne(() => SegmentoEntity)
  segmento: SegmentoEntity;
}
