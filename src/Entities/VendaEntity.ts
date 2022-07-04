import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { LoteEntity } from "./LoteEntity";
@Entity("venda")
export class VendaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lote_id: number;

  @Column()
  quantidade: number;

  @Column()
  valor_unidade: number;

  @JoinColumn({ name: "lote_id" })
  @ManyToOne(() => LoteEntity)
  user: LoteEntity;
}
