import { IUpdateUser } from "../../Interfaces/UserInterfaces/updateUser";
import { UsuarioService } from "../../Service/UsuarioService";

export async function update(usuario: IUpdateUser) {
  const service = new UsuarioService();
  try {
    const atualizacao = await service.updateAccount(usuario);
    return atualizacao;
  } catch (error) {
    throw error;
  }
}
