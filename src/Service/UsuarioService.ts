import { getCustomRepository, getRepository, Repository } from "typeorm";
import { UsuarioRepository } from "../Repositories/UsuarioRepository";
import { UsuarioEntity } from "../Entities/UsuarioEntity";
import { ICreateUser } from "../Interfaces/UserInterfaces/createUser";
import { IUpdateUser } from "../Interfaces/UserInterfaces/updateUser";
import bcrypt from "bcrypt";
export class UsuarioService {
  async createUser({ email, nome, senha }: ICreateUser) {
    const usersRepository = getCustomRepository(UsuarioRepository);
    try {
      const user = usersRepository.create({
        email,
        nome,
        senha,
      });

      await usersRepository.save(user);

      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email: string) {
    const usersRepository = getCustomRepository(UsuarioRepository);
    try {
      const user = await usersRepository.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw "Usuário não encontrado!";
    }
  }

  async updateAccount({ id, email, nome, senha }: IUpdateUser) {
    const usersRepository = getCustomRepository(UsuarioRepository);
    senha = bcrypt.hashSync(senha, 8)
    // console.log(id,email,name,password)
    try {
      const update = await usersRepository
        .createQueryBuilder()
        .update(UsuarioEntity)
        .set({ nome, senha, email })
        .where(`id = ${id}`)
        .execute();

      return { id, email, nome, senha };
    } catch (error) {
      throw error;
    }
  }
}
