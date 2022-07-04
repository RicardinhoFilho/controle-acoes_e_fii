import {LoteService} from "../../Service/LoteService";
import {ICreateLote} from "../../Interfaces/LoteInterface/ICreateLote"

export async function create(params:ICreateLote){
    const service = new LoteService();
    try {
        const data = await service.create(params);
        return data; 
    } catch (error) {
        throw error;
    }


}