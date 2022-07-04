import { EntityRepository, Repository } from "typeorm";
import { EmpresaEntity } from "../Entities/EmpresaEntity";

@EntityRepository(EmpresaEntity)
export class EmpresaRepository extends Repository<EmpresaEntity> {}