import { ICreateUser } from "../../Interfaces/UserInterfaces/createUser";
import { UsuarioService } from "../../Service/UsuarioService";

export async function create(usuario: ICreateUser) {
  const service = new UsuarioService();
  try {
    const novo = await service.createUser(usuario);
    return novo;
  } catch (error) {
    throw error;
  }
}
