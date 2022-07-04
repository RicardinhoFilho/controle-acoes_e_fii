import { Request, Response } from "express";
import { ICreateVenda } from "../Interfaces/VendaInterface/ICreateVenda";
import { IUpdateVenda } from "../Interfaces/VendaInterface/IUpdateVenda";
import { create, delet, update, get } from "../UseCases/VendaUseCases";

export class VendaController {
  async create(req: Request, res: Response) {
    try {
      const params: ICreateVenda = req.body;
      const data = await create(params);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const params: IUpdateVenda = req.body;
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
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const lote_id = Number(req.params.lote_id);
      const data = await get(lote_id);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
