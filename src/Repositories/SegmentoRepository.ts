import { EntityRepository, Repository } from "typeorm";
import { SegmentoEntity } from "../Entities/SegmentoEntity";

@EntityRepository(SegmentoEntity)
export class SegmentoRepository extends Repository<SegmentoEntity> {}