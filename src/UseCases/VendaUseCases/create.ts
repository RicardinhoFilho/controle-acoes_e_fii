import { VendaService } from "../../Service/VendaService";
import { ICreateVenda } from "../../Interfaces/VendaInterface/ICreateVenda";

export async function create(params: ICreateVenda) {
  const service = new VendaService();
  try {
    const data = await service.create(params);
    return data;
  } catch (error) {
    throw error;
  }
}
