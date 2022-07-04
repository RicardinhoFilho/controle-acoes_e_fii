import { Router } from "express";
import {EmpresaController} from "../Controller/EmpresaController";
const router = Router();

const baseUrl = "/empresa";
const controller = new EmpresaController();
router.get(`${baseUrl}`, controller.get);
router.post(`${baseUrl}`, controller.create);
router.patch(`${baseUrl}`, controller.update);
router.delete(`${baseUrl}/:id`, controller.delete);



export default router;