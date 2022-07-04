import { LoteService } from "../../Service/LoteService";
import { IUpdateLote } from "../../Interfaces/LoteInterface/IUpdateLote";

export async function update(params: IUpdateLote) {
  const service = new LoteService();
  try {
    const data = await service.update(params);
    return data;
  } catch (error) {
    throw error;
  }
}
