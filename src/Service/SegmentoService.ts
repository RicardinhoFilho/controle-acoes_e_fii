import { getCustomRepository, getRepository, Repository } from "typeorm";
import { SegmentoRepository } from "../Repositories/SegmentoRepository";
import { SegmentoEntity } from "../Entities/SegmentoEntity";
import bcrypt from "bcrypt";
import { ICreateSegmento } from "../Interfaces/SegmentoInterfaces/ICreateSegmento";
import { IUpdateSegmento } from "../Interfaces/SegmentoInterfaces/IUpdateSegmento";
export class SegmentoService {
  async create({ segmento, descricao }: ICreateSegmento) {
    const repository = getCustomRepository(SegmentoRepository);
    try {
      const model = repository.create({
        segmento,
        descricao,
      });

      await repository.save(model);

      return model;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    const repository = getCustomRepository(SegmentoRepository);
    try {
      const model = await repository.find({ order: { segmento: 1 } });
      return model;
    } catch (error) {
      throw "Usuário não encontrado!";
    }
  }

  async update({ id, descricao, segmento }: IUpdateSegmento) {
    const repository = getCustomRepository(SegmentoRepository);
    // console.log(id,email,name,password)
    try {
      const update = await repository
        .createQueryBuilder()
        .update(SegmentoEntity)
        .set({ descricao, segmento })
        .where(`id = ${id}`)
        .execute();

      return { id, descricao, segmento };
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    const repository = getCustomRepository(SegmentoRepository);
    try {
      const del = repository
        .createQueryBuilder()
        .delete()
        .where(`id=${id}`)
        .execute();
      return `Categoria ${id} excluída com sucesso!`;
    } catch (error) {
      console.log(error);
      throw `Não foi possível excluir a categoria!`;
    }
  }
}
