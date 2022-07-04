import { getCustomRepository, getRepository, Repository } from "typeorm";
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

  async getAll(lote_id: number) {
    const repository = getCustomRepository(VendaRepository);
    try {
      const model = await repository.find({
        where: { lote_id },
        order: { id: 1 },
      });
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
