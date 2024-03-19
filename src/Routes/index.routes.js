import { Router } from "express";
import {
  createUser,
  deleteUser,
  getPage,
  getpageUpdate,
  getpageUser,
  updateUser,
} from "../Controllers/index.controller.js";

const router = Router();

router.get("/tareas", getPage);
router.get("/delete/:id", deleteUser);
router.post("/update/:id", updateUser);
router.get("/addUsers", getpageUser );
router.get("/update/:id",getpageUpdate)
router.post("/addUsers", createUser);

export default router;
