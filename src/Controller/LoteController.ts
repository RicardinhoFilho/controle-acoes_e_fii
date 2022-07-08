import { Request, Response } from "express";
import { ICreateLote } from "../Interfaces/LoteInterface/ICreateLote";
import { IUpdateLote } from "../Interfaces/LoteInterface/IUpdateLote";
import { create, delet, update, get } from "../UseCases/LoteUseCases";

export class LoteController {
  async create(req: Request, res: Response) {
    try {
      const params: ICreateLote = req.body;
      console.log(params);
      const data = await create(params);
 
      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const params: IUpdateLote = req.body;
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
      const user_id = req.userId;
      const data = await get(user_id);

      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
