import { VendaService } from "../../Service/VendaService";
import { IUpdateVenda } from "../../Interfaces/VendaInterface/IUpdateVenda";

export async function update(params: IUpdateVenda) {
  const service = new VendaService();
  try {
    const data = await service.update(params);
    return data;
  } catch (error) {
    throw error;
  }
}
