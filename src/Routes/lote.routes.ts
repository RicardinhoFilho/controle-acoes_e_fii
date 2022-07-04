import { Router } from "express";
import { LoteController } from "../Controller/LoteController";
import { authMiddleware } from "../Middlewares/authMiddleware";

const router = Router();
const baseUrl = "/lote";
const controller = new LoteController();
router.get(`${baseUrl}`, authMiddleware, controller.get);
router.post(`${baseUrl}`, authMiddleware, controller.create);
router.patch(`${baseUrl}`, authMiddleware, controller.update);
router.delete(`${baseUrl}/:id`, authMiddleware, controller.delete);

export default router;
