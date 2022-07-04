import { Router } from "express";
import {SegmentoController} from "../Controller/SegmentoController";
const router = Router();

const baseUrl = "/segmento";
const controller = new SegmentoController();
router.post(`${baseUrl}`, controller.create);
router.patch(`${baseUrl}`, controller.update);
router.delete(`${baseUrl}/:id`, controller.delete);
router.get(`${baseUrl}`, controller.get);



export default router;