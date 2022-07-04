import { getCustomRepository, getRepository, Repository } from "typeorm";
import { EmpresaRepository } from "../Repositories/EmpresaRepository";
import { EmpresaEntity } from "../Entities/EmpresaEntity";
import { ICreateEmpresa } from "../Interfaces/EmpresaInterfaces/ICreateEmpresa";
import { IUpdateEmpresa } from "../Interfaces/EmpresaInterfaces/IUpdateEmpresa";
export class EmpresaService {
  async create({ fii, nome, segmento_id, sigla }: ICreateEmpresa) {
    const repository = getCustomRepository(EmpresaRepository);
    try {
      const model = repository.create({
        fii,
        nome,
        segmento_id,
        sigla,
      });

      await repository.save(model);

      return model;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    const repository = getCustomRepository(EmpresaRepository);
    try {
      const model = await repository.find({ order: { nome: 1 } });
      return model;
    } catch (error) {
      throw "Usuário não encontrado!";
    }
  }

  async update({ id, fii, nome, segmento_id, sigla }: IUpdateEmpresa) {
    const repository = getCustomRepository(EmpresaRepository);
    // console.log(id,email,name,password)
    try {
      const update = await repository
        .createQueryBuilder()
        .update(EmpresaEntity)
        .set({ fii, nome, segmento_id, sigla })
        .where(`id = ${id}`)
        .execute();

      return { id, fii, nome, segmento_id, sigla };
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    const repository = getCustomRepository(EmpresaRepository);
    try {
      const del = repository
        .createQueryBuilder()
        .delete()
        .where(`id=${id}`)
        .execute();
      return `Empresa ${id} excluída com sucesso!`;
    } catch (error) {
      console.log(error);
      throw `Não foi possível excluir a Empresa!`;
    }
  }
}
