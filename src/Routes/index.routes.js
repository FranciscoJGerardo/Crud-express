import { Router } from "express";
import {
  createUser,
  deleteUser,
  getPage,
} from "../Controllers/index.controller.js";
const router = Router();

router.get("/tareas", getPage);
router.post("/tareas", createUser);
router.get("/delete/:id", deleteUser);

export default router;
