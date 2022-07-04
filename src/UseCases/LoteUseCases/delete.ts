import { LoteService } from "../../Service/LoteService";

export async function delet(id: number) {
  const service = new LoteService();
  try {
    const data = await service.delete(id);
    return data; 
  } catch (error) {
    throw error;
  }
}
