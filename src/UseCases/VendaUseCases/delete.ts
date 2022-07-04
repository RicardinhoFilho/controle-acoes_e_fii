import { VendaService } from "../../Service/VendaService";

export async function delet(id: number) {
  const service = new VendaService();
  try {
    const data = await service.delete(id);
    return data;
  } catch (error) {
    throw error;
  }
}
