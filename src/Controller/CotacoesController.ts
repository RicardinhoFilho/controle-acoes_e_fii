import axios from "axios";
import { Request, Response } from "express";
import { ICreateEmpresa } from "../Interfaces/EmpresaInterfaces/ICreateEmpresa";
import { IUpdateEmpresa } from "../Interfaces/EmpresaInterfaces/IUpdateEmpresa";
import { create, delet, update, get } from "../UseCases/EmpresaUseCases";

export class CotacoesController {
  async get(req: Request, res: Response) {
    try {
      const sigla = req.params.sigla;
      const {data}  = await axios.get(`https://finance.yahoo.com/quote/${sigla}.SA`);
      const teste = data.split("FIN_TICKER_PRICE&quot;:&quot;");
      const teste2 = data.split("FIN_TICKER_PRICE_CHANGE_PERCENT&quot;:&quot;")
      console.log(teste[1].substring(0,6))
      console.log(teste2[1].substring(0,6))
    //   const response = {
    //     valor: teste[1].substring(0, 6).replace("&q", ""),
    //     percentual_dia: teste2[1].substring(0, 6).replace("%", ""),
    //   };
     // console.log(response);

      return res.status(200).json({cotacao:teste[1].substring(0,6).replace("&","").replace("q",""), variacao:teste2[1].substring(0,6)});
    } catch (error) {
        console.log(error)
      return res.status(400).json(error);
     
    }
  }
}
