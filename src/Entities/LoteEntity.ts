import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { EmpresaEntity } from "./EmpresaEntity";
import { UsuarioEntity } from "./UsuarioEntity";
@Entity("lote")
export class LoteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuario_id: number;

  @Column()
  quantidade: number;

  @Column()
  valor_unidade: number;

  @Column()
  empresa_id: number;

  @JoinColumn({ name: "usuario_id" })
  @ManyToOne(() => UsuarioEntity)
  user: UsuarioEntity;

  @JoinColumn({ name: "empresa_id" })
  @ManyToOne(() => EmpresaEntity)
  empresa: EmpresaEntity;
}
