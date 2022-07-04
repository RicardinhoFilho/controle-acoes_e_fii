import { Router } from "express";
import { VendaController } from "../Controller/VendaController";
import { authMiddleware } from "../Middlewares/authMiddleware";

const router = Router();
const baseUrl = "/venda";
const controller = new VendaController();
router.get(`${baseUrl}/:lote_id`, authMiddleware, controller.get);
router.post(`${baseUrl}`, authMiddleware, controller.create);
router.patch(`${baseUrl}`, authMiddleware, controller.update);
router.delete(`${baseUrl}/:id`, authMiddleware, controller.delete);

export default router;
