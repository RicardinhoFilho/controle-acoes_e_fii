import { Router } from "express";
import {CotacoesController} from "../Controller/CotacoesController";


const router = Router();

const baseUrl = "/cotacoes";
const controller = new CotacoesController();
router.get(`${baseUrl}/:sigla`, controller.get);



export default router;