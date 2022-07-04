import { IUpdateEmpresa } from "../../Interfaces/EmpresaInterfaces/IUpdateEmpresa";
import {EmpresaService} from "../../Service/EmpresaService";


export async function update(params:IUpdateEmpresa){
    const service = new EmpresaService();
    try {
        const data = await service.update(params);
        return data;
    } catch (error) {
        throw error;
    }

}