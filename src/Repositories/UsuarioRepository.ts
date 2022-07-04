import { EntityRepository, Repository } from "typeorm";
import { UsuarioEntity } from "../Entities/UsuarioEntity";

@EntityRepository(UsuarioEntity)
export class UsuarioRepository extends Repository<UsuarioEntity> {}