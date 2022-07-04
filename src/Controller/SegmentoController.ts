import { Request, Response } from "express";
import { ICreateSegmento } from "../Interfaces/SegmentoInterfaces/ICreateSegmento";
import { IUpdateSegmento } from "../Interfaces/SegmentoInterfaces/IUpdateSegmento";
import { create, delet, update, get } from "../UseCases/SegmentoUseCase";

export class SegmentoController {
  async create(req: Request, res: Response) {
    try {
      const params: ICreateSegmento = req.body;
      const data = await create(params);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const params: IUpdateSegmento = req.body;
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
      const data = await get();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
