import { SegmentoService } from "../../Service/SegmentoService";

export async function delet(id: number) {
  try {
    const service = new SegmentoService();

    const data = await service.delete(id);
    return data;
  } catch (error) {
    throw error;
  }
}
