import { EntityRepository, Repository } from "typeorm";
import { VendaEntity } from "../Entities/VendaEntity";

@EntityRepository(VendaEntity)
export class VendaRepository extends Repository<VendaEntity> {}