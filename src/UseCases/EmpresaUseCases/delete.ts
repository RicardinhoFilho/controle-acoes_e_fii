import {EmpresaService} from "../../Service/EmpresaService";


export async function delet(id:number){
    const service = new EmpresaService();
    try {
        const data = await service.delete(id);
        return data;
    } catch (error) {
        throw error;
    }

}