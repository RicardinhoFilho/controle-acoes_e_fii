import { Request, Response } from "express";
import { ICreateEmpresa } from "../Interfaces/EmpresaInterfaces/ICreateEmpresa";
import { IUpdateEmpresa } from "../Interfaces/EmpresaInterfaces/IUpdateEmpresa";
import { create, delet, update, get } from "../UseCases/EmpresaUseCases";

export class EmpresaController {
  async create(req: Request, res: Response) {
    try {
      const params: ICreateEmpresa = req.body;
      const data = await create(params);

      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const params: IUpdateEmpresa = req.body;
      const data = await update(params);

      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await delet(id);

      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const data = await get();

      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
