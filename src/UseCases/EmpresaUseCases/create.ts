import { ICreateEmpresa } from "../../Interfaces/EmpresaInterfaces/ICreateEmpresa";
import {EmpresaService} from "../../Service/EmpresaService";


export async function create(params:ICreateEmpresa){
    const service = new EmpresaService();
    try {
        const data = await service.create(params);
        return data;
    } catch (error) {
        throw error;
    }

}