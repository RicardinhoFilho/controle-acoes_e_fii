
import {VendaService} from "../../Service/VendaService";


export async function get(usuario_id: number){
    const service = new VendaService();
    try {
        const data = await service.getAll(usuario_id);
        return data;
    } catch (error) {
        throw error;
    }
}