
import {VendaService} from "../../Service/VendaService";


export async function get(lote_id: number){
    const service = new VendaService();
    try {
        const data = await service.getAll(lote_id);
        return data;
    } catch (error) {
        throw error;
    }
}