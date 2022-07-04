import { SegmentoService } from "../../Service/SegmentoService";
import {ICreateSegmento} from "../../Interfaces/SegmentoInterfaces/ICreateSegmento";

export async function create(params:ICreateSegmento) {
  try {
    const service = new SegmentoService();

    const data = await service.create(params);
    return data;
  } catch (error) {
    throw error;
  }
}
