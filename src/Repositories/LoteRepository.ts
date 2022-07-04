import { EntityRepository, Repository } from "typeorm";
import { LoteEntity } from "../Entities/LoteEntity";

@EntityRepository(LoteEntity)
export class LoteRepository extends Repository<LoteEntity> {}