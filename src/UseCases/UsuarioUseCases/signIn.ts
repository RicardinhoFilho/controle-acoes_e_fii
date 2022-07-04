import { IUpdateUser } from "../../Interfaces/UserInterfaces/updateUser";
import { UsuarioService } from "../../Service/UsuarioService";
import bcrypt from "bcrypt";
import { AuthServices } from "../../Service/AuthService";

export async function signIn(email: string, senha: string) {
  const service = new UsuarioService();
  const authService = new AuthServices();
  try {
    const userExist = await service.getUserByEmail(email);
    if (userExist) {
      const isValidPassword = await bcrypt.compare(senha, userExist.senha);

      const token = authService.createToken(userExist.id);
      return {
        id: userExist.id,
        nome: userExist.nome,
        email: userExist.email,
        senha: userExist.senha,
        token,
      };
    }
    throw "Não foi possível efetuar o login!";
  } catch (error) {
    throw error;
  }
}
