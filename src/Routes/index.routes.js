import { Router } from "express";
import { getPage } from "../Controllers/index.controller.js"
const router = Router();

router.get("/tareas",getPage);


export default router;