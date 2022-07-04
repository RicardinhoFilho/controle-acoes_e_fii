import {EmpresaService} from "../../Service/EmpresaService";


export async function get(){
    const service = new EmpresaService();
    try {
        const data = await service.getAll();
        return data;
    } catch (error) {
        throw error;
    }

}