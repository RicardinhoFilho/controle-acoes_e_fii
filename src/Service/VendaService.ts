import { getCustomRepository, getManager, getRepository, Repository } from "typeorm";
import { VendaRepository } from "../Repositories/VendaRepository";
import { VendaEntity } from "../Entities/VendaEntity";
import { ICreateVenda } from "../Interfaces/VendaInterface/ICreateVenda";
import { IUpdateVenda } from "../Interfaces/VendaInterface/IUpdateVenda";
export class VendaService {
  async create({ lote_id, quantidade, valor_unidade }: ICreateVenda) {
    const repository = getCustomRepository(VendaRepository);
    try {
      const model = repository.create({
        lote_id,
        quantidade,
        valor_unidade,
      });

      await repository.save(model);

      return model;
    } catch (error) {
      throw error;
    }
  }

  async getAll(usuario_id: number) {
    const manager = getManager();
    try {
      const model = await manager.query(`select venda.id as id, venda.lote_id as lote_id,venda.quantidade as quantidade, IFNULL( lote.quantidade-(select SUM(quantidade) from venda where lote_id = lote.id),lote.quantidade) 
      as quantidade_disponivel,venda.valor_unidade as venda_valor_unidade, lote.valor_unidade as compra_valor_unidade ,
      empresa.nome as nome_empresa, empresa.sigla as sigla
      from venda inner join lote on lote.id = venda.lote_id inner join empresa on empresa.id = lote.empresa_id inner join usuario on usuario.id = lote.usuario_id where usuario.id =${usuario_id};`)
      return model;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update({ id, lote_id, quantidade, valor_unidade }: IUpdateVenda) {
    const repository = getCustomRepository(VendaRepository);
    // console.log(id,email,name,password)
    try {
      const update = await repository
        .createQueryBuilder()
        .update(VendaEntity)
        .set({ lote_id, quantidade, valor_unidade })
        .where(`id = ${id}`)
        .execute();

      return { id, lote_id, quantidade, valor_unidade };
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    const repository = getCustomRepository(VendaRepository);
    try {
      const del = repository
        .createQueryBuilder()
        .delete()
        .where(`id=${id}`)
        .execute();
      return `Venda ${id} excluída com sucesso!`;
    } catch (error) {
      console.log(error);
      throw `Não foi possível excluir a Venda!`;
    }
  }
}
