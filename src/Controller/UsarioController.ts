import { Request, Response } from "express";
import { IUpdateUser } from "../Interfaces/UserInterfaces/updateUser";
import { ICreateUser } from "../Interfaces/UserInterfaces/createUser";
import { create, signIn, update } from "../UseCases/UsuarioUseCases";

export class UsarioController {
  async create(req: Request, res: Response) {
    const usuario: ICreateUser = req.body;
    try {
      const createUser = await create(usuario);
      return res.status(201).json(createUser);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response) {
    const usuario: IUpdateUser = req.body;
    try {
      const updateUser = await update(usuario);
      return res.status(201).json(updateUser);
    } catch (error) {
      return res.status(400).json(error);
    }


  }

  async signIn(req: Request, res: Response) {

    const {email, senha} = req.body;
    try {
      const signInUser = await signIn(email,senha);
      return res.status(201).json(signInUser);
    } catch (error) {
      return res.status(400).json(error);
    }



  }
}
