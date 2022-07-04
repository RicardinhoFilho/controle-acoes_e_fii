import {LoteService} from "../../Service/LoteService";

export async function get(user_id: number){
    const service = new LoteService();
    try {
        const data = await service.getAll(user_id);
        return data; 
    } catch (error) {
        throw error;
    }


}