import { SegmentoService } from "../../Service/SegmentoService";
import {IUpdateSegmento} from "../../Interfaces/SegmentoInterfaces/IUpdateSegmento";

export async function update(params:IUpdateSegmento) {
  try {
    const service = new SegmentoService();

    const data = await service.update(params);
    return data;
  } catch (error) {
    throw error;
  }
}
