import { getCustomRepository, getManager, getRepository, Repository } from "typeorm";
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
  
    const  manager = getManager(); 
    try {
      
      const model = await manager.query(`select lote.id as id,lote.EMPRESA_ID as empresa_id , IFNULL( lote.quantidade-(select SUM(quantidade) from venda where lote_id = lote.id),lote.quantidade) as quantidade , 
      lote.VALOR_UNIDADE, empresa.sigla from lote inner join empresa on empresa.id = lote.empresa_id where usuario_id = ${usuario_id};`);
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
