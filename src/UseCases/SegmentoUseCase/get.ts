import { SegmentoService } from "../../Service/SegmentoService";

export async function get() {
  try {
    const service = new SegmentoService();

    const data = await service.getAll();
    return data;
  } catch (error) {
    throw error;
  }
}
