import { Router } from "express";
import {UsarioController} from "../Controller/UsarioController";
const router = Router();

const baseUrl = "/usuario";
const controller = new UsarioController();
router.post(`${baseUrl}`, controller.create);
router.patch(`${baseUrl}`, controller.update);
router.post(`${baseUrl}/signIn`, controller.signIn);



export default router;