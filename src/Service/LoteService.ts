import { getCustomRepository, getRepository, Repository } from "typeorm";
import { LoteRepository } from "../Repositories/LoteRepository";
import { LoteEntity } from "../Entities/LoteEntity";
import { ICreateLote } from "../Interfaces/LoteInterface/ICreateLote";
import { IUpdateLote } from "../Interfaces/LoteInterface/IUpdateLote";
export class LoteService {
  async create({
    usuario_id,
    quantidade,
    valor_unidade,
    empresa_id,
  }: ICreateLote) {
    const repository = getCustomRepository(LoteRepository);
    try {
      const model = repository.create({
        usuario_id,
        quantidade,
        valor_unidade,
        empresa_id,
      });

      await repository.save(model);

      return model;
    } catch (error) {
      throw error;
    }
  }

  async getAll(usuario_id: number) {
    const repository = getCustomRepository(LoteRepository);
    try {
      const model = await repository.find({
        where: { usuario_id},
        order: { id: 1 },
      });
      return model;
    } catch (error) {
        console.log(error)
      throw error;
    }
  }

  async update({
    id,
    usuario_id,
    quantidade,
    valor_unidade,
    empresa_id,
  }: IUpdateLote) {
    const repository = getCustomRepository(LoteRepository);
    // console.log(id,email,name,password)
    try {
      const update = await repository
        .createQueryBuilder()
        .update(LoteEntity)
        .set({ usuario_id, quantidade, valor_unidade, empresa_id })
        .where(`id = ${id}`)
        .execute();

      return { id, usuario_id, quantidade, valor_unidade, empresa_id };
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    const repository = getCustomRepository(LoteRepository);
    try {
      const del = repository
        .createQueryBuilder()
        .delete()
        .where(`id=${id}`)
        .execute();
      return `Lote ${id} excluída com sucesso!`;
    } catch (error) {
      console.log(error);
      throw `Não foi possível excluir a Lote!`;
    }
  }
}
